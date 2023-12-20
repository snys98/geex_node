import { Component, Injector, OnInit } from "@angular/core";
import { _HttpClient } from "@delon/theme";
import { deepCopy } from "@delon/util";

import { BusinessComponentBase } from "../../../../shared/components/business.component.base";
import { AppActions } from "../../../../shared/states/AppActions";
import { ChatState } from "../../../../shared/states/chat.state";

/* export type ChatListPageParam = ListPageParams<ChatBriefFragment> & {
  filterText: string;
};
 */
@Component({
  selector: "app-chat-list",
  templateUrl: "./chat-list.component.html",
  styles: [
    `
      .chat-list {
        padding-left: 1rem;
        padding-right: 1rem;
        height: calc(100% - 56px - 120px);
      }
    `,
  ],
})
export class ChatListComponent extends BusinessComponentBase {
  prepare(params: any) {}
  constructor(injector: Injector, public chatState: ChatState) {
    super(injector);
  }

  onChatClick(id: string) {
    this.chatState.dispatch(new AppActions.Chat.SwitchChat(id));
  }
  onDeleteClick(id: string) {
    this.nzModalSrv.confirm({
      nzTitle: "确认删除",
      nzContent: "确认删除该会话吗？",
      nzOnOk: async () => {
        await this.chatState.dispatch(new AppActions.Chat.DeleteChat(id));
      },
    });
  }
}
