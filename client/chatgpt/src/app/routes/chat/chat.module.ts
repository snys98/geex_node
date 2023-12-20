import { NgModule, Type } from "@angular/core";
import { SharedModule } from "@shared";
import { MarkdownModule } from "ngx-markdown";

import { ChatRoutingModule } from "./chat-routing.module";
import { ChatWindowComponent } from "./chat-window/chat-window.component";
import { ChatItemComponent } from "./components/chat-item/chat-item.component";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { ChatQuotaComponent } from "./components/chat-quota/chat-quota.component";
import { ChatRecorderModalComponent } from "./components/chat-recorder-modal/chat-recorder-modal.component";
import { MessageListComponent } from "./components/message-list/message-list.component";
import { NewSessionModalComponent } from "./components/new-chat-modal/new-chat-modal.component";

const COMPONENTS: Array<Type<void>> = [
  ChatItemComponent,
  ChatListComponent,
  ChatWindowComponent,
  ChatQuotaComponent,
  MessageListComponent,
  NewSessionModalComponent,
  ChatRecorderModalComponent,
];

@NgModule({
  providers: [],
  imports: [SharedModule, ChatRoutingModule, MarkdownModule.forChild()],
  declarations: COMPONENTS,
})
export class ChatModule {}
