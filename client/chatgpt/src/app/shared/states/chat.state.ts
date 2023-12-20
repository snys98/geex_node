import { Injectable, Injector } from "@angular/core";
import { deepCopy } from "@delon/util";
import { Action, Select, StateContext } from "@ngxs/store";
import { Apollo, ApolloBase } from "apollo-angular";
import { Observable, Subscription as rxjsSub } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

import {
  ChatBriefFragment,
  ChatByIdGql,
  ChatByIdQuery,
  ChatByIdQueryVariables,
  ChatDetailFragment,
  ChatMessageBriefFragment,
  ChatMessageType,
  ChatsGql,
  ChatsQuery,
  ChatsQueryVariables,
  CreateChatGql,
  CreateChatInput,
  CreateChatMutation,
  CreateChatMutationVariables,
  DeleteChatGql,
  DeleteChatMutation,
  DeleteChatMutationVariables,
  MyQuotaGql,
  MyQuotaQuery,
  MyQuotaQueryVariables,
  OnNewMessageGql,
  OnNewMessageSubscription,
  OnNewMessageSubscriptionVariables,
  QuotaFragment,
  SendTextMessageGql,
  SendTextMessageMutation,
  SendTextMessageMutationVariables,
  SendMediaMessageGql,
  SendMediaMessageMutation,
  SendMediaMessageMutationVariables,
} from "../graphql/.generated/type";
import { AppActions } from "./AppActions";
import { StateBase } from "./StateBase";
import { StateClassDefine } from "./common";

export type ChatStateModel = {
  activeChatId: string;
  chatList: ChatBriefFragment[];
  messages: ChatMessageBriefFragment[];
  quota: QuotaFragment;
};

@Injectable({ providedIn: "root" })
@StateClassDefine<ChatStateModel>({
  activeChatId: "",
  chatList: [],
  messages: [],
  quota: {} as any,
})
export class ChatState extends StateBase<ChatStateModel> {
  apollo: Apollo;
  subscriptions = new Map<string, rxjsSub>();
  /**
   *
   */
  constructor(injector: Injector) {
    super(injector);
    this.apollo = this.injector.get(Apollo);
  }

  @Action(AppActions.Chat.Init)
  public async init(ctx: StateContext<ChatStateModel>, action: AppActions.Chat.Init) {
    let res = await this.apollo
      .query<ChatsQuery, ChatsQueryVariables>({
        query: ChatsGql,
      })
      .toPromise();
    ctx.patchState({ chatList: deepCopy(res.data.chats.items) });
    this.dispatch(new AppActions.Chat.SwitchChat(res.data.chats.items.firstOrDefault()?.id));
  }

  messages$ = this.observable.map(x => x.messages);
  activeChatId$ = this.observable.map(x => x.activeChatId).pipe(distinctUntilChanged());
  activeChat$ = this.observable.map(x => x.chatList.firstOrDefault(y => y.id == x.activeChatId)).pipe(distinctUntilChanged());
  @Action(AppActions.Chat.SwitchChat)
  public async switchChat(ctx: StateContext<ChatStateModel>, action: AppActions.Chat.SwitchChat) {
    if (action.chatId == null) {
      ctx.patchState({
        messages: [],
        activeChatId: null,
      });
      return;
    }

    if (
      this.snapshot.activeChatId != null &&
      this.snapshot.activeChatId != action.chatId &&
      this.subscriptions.has(this.snapshot.activeChatId)
    ) {
      this.subscriptions.get(this.snapshot.activeChatId).unsubscribe();
      this.subscriptions.delete(this.snapshot.activeChatId);
    }

    let chatId = action.chatId;
    ctx.patchState({ activeChatId: chatId });

    let res = await this.apollo
      .query<ChatByIdQuery, ChatByIdQueryVariables>({
        query: ChatByIdGql,
        variables: {
          chatId: chatId,
        },
      })
      .toPromise();
    ctx.patchState({
      messages: deepCopy(res.data.chatById.messages),
    });
    // todo: memory leak, unsubscribe on switchChat
    const newSubscription = this.apollo
      .use("subscription")
      .subscribe<OnNewMessageSubscription, OnNewMessageSubscriptionVariables>({
        query: OnNewMessageGql,
        variables: {
          chatId: chatId,
        },
      })
      .subscribe(async newMessageRes => {
        let newMessage = newMessageRes.data.onNewMessage;
        console.log("onNewMessage", newMessage);
        let message = this.snapshot.messages.firstOrDefault(a => a.id == newMessage.id);
        if (message) {
          message = { ...message, text: newMessage.text };
          ctx.patchState({ messages: [...this.snapshot.messages.slice(0, -1), message] });
        } else {
          ctx.patchState({ messages: [...this.snapshot.messages, newMessage] });
        }
        this.store.dispatch(new AppActions.Chat.UpdateQuota()).lastValuePromise();
      });

    this.subscriptions.set(chatId, newSubscription);
  }

  @Action(AppActions.Chat.DeleteChat)
  public async deleteChat(ctx: StateContext<ChatStateModel>, action: AppActions.Chat.DeleteChat) {
    let res = await this.apollo
      .mutate<DeleteChatMutation, DeleteChatMutationVariables>({
        mutation: DeleteChatGql,
        variables: {
          chatId: action.chatId,
        },
      })
      .toPromise();

    if (res.data.deleteChat) {
      ctx.patchState({ chatList: this.snapshot.chatList.removeAll(a => a.id == action.chatId) });
    }

    if (action.chatId == this.snapshot.activeChatId) {
      this.dispatch(new AppActions.Chat.SwitchChat(this.snapshot.chatList.firstOrDefault()?.id));
    }
  }

  @Action(AppActions.Chat.CreateChat)
  public async createChat(ctx: StateContext<ChatStateModel>, action: AppActions.Chat.CreateChat) {
    let res = await this.apollo
      .mutate<CreateChatMutation, CreateChatMutationVariables>({
        mutation: CreateChatGql,
        variables: action.createChatInput,
      })
      .toPromise();

    if (res.data.createChat) {
      ctx.patchState({ chatList: [...this.snapshot.chatList, res.data.createChat].orderByDescending(a => a.id) });
    }

    await this.dispatch(new AppActions.Chat.SwitchChat(res.data.createChat.id));
  }

  @Action(AppActions.Chat.SendMessage)
  public async sendChatMessage(ctx: StateContext<ChatStateModel>, action: AppActions.Chat.SendMessage) {
    if (action.messageType == ChatMessageType.Text) {
      await this.apollo
        .use("silent")
        .mutate<SendTextMessageMutation, SendTextMessageMutationVariables>({
          mutation: SendTextMessageGql,
          variables: {
            chatId: this.snapshot.activeChatId,
            text: action.text,
          },
        })
        .toPromise();
    } else {
      await this.apollo
        .use("silent")
        .mutate<SendMediaMessageMutation, SendMediaMessageMutationVariables>({
          mutation: SendMediaMessageGql,
          variables: {
            chatId: this.snapshot.activeChatId,
            input: {
              messageType: action.messageType,
              text: action.text,
              content: action.content,
            },
          },
        })
        .toPromise();
    }
  }

  @Action(AppActions.Chat.UpdateQuota)
  async updateQuota(ctx: StateContext<ChatStateModel>, action: AppActions.Chat.UpdateQuota) {
    let res = await this.apollo
      .query<MyQuotaQuery, MyQuotaQueryVariables>({
        query: MyQuotaGql,
      })
      .lastValuePromise();
    ctx.patchState({ quota: res.data.myQuota });
  }
}
