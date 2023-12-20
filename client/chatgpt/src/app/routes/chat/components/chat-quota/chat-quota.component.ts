import { Component, Injector, OnInit } from "@angular/core";
import { _HttpClient } from "@delon/theme";

import { BusinessComponentBase } from "../../../../shared/components/business.component.base";
import { AppActions } from "../../../../shared/states/AppActions";
import { ChatState } from "../../../../shared/states/chat.state";

@Component({
  selector: "app-chat-quota",
  templateUrl: "./chat-quota.component.html",
})
export class ChatQuotaComponent extends BusinessComponentBase {
  chatState: ChatState;
  /**
   *
   */
  constructor(injector: Injector) {
    super(injector);
    this.chatState = injector.get(ChatState);
    this.chatState.dispatch(new AppActions.Chat.UpdateQuota());
  }
  prepare(params: any) {}

  ngOnInit(): void {}
}
