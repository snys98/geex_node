import { Component, Injector, OnInit } from "@angular/core";
import { _HttpClient } from "@delon/theme";
import * as base64 from "base64-js";
import { Subscription, map } from "rxjs";

import { RoutedComponent } from "../../../shared/components/routed-components/routed.component.base";
import {
  OnNewAudioSubscription,
  OnNewAudioSubscriptionVariables,
  OnNewAudioGql,
  ChatDetailFragment,
} from "../../../shared/graphql/.generated/type";
import { AppActions } from "../../../shared/states/AppActions";
import { ChatState } from "../../../shared/states/chat.state";
import { NewSessionModalComponent } from "../components/new-chat-modal/new-chat-modal.component";
import { AudioPlayer } from "./audio-player";

@Component({
  selector: "app-chat-window",
  templateUrl: "./chat-window.component.html",
  styles: [
    `
      .search {
        height: 56px;
        align-content: center;
        padding-left: 16px;
        padding-right: 16px;
      }

      .search-input {
        background: #212123;
        border-color: transparent;
      }

      .search-input:focus {
        background-color: rgba(99, 226, 183, 0.1);
      }

      .search-input::placeholder {
        color: rgba(255, 255, 255, 0.38);
      }

      .search-icon {
        color: rgb(6, 6, 7);
        font-size: 12px;
      }
    `,
  ],
})
export class ChatWindowComponent extends RoutedComponent<{}, ChatState> {
  audioSubscription: Subscription;
  audioPlayer: AudioPlayer = new AudioPlayer();
  /**
   *
   */
  constructor(private injector: Injector) {
    super(injector);
    const chatState = this.injector.get(ChatState);
    chatState.activeChatId$
      .filter(x => x != null)
      .subscribe(chat => {
        this.audioSubscription?.unsubscribe();
        this.audioSubscription = this.apollo
          .use("subscription")
          .subscribe<OnNewAudioSubscription, OnNewAudioSubscriptionVariables>({
            query: OnNewAudioGql,
            variables: {
              chatId: chat,
            },
          })
          .subscribe(async newAudioRes => {
            let newAudio = newAudioRes.data.onNewAudio;
            console.log("newAudio", newAudio);
            await this.audioPlayer.enqueueAudio(newAudio);
          });
      });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  async fetchData(): Promise<ChatState> {
    throw new Error("Method not implemented.");
  }

  async ngOnInit(): Promise<void> {}
  startNewSession() {
    this.nzModalSrv.create({
      nzTitle: "Start New Session",
      nzContent: NewSessionModalComponent,
      nzOnOk: componentInstance => {
        componentInstance.handleSubmit();
      },
    });
  }
}
