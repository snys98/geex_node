import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { _HttpClient } from "@delon/theme";

import { ChatBriefFragment } from "../../../../shared/graphql/.generated/type";

@Component({
  selector: "app-chat-item",
  templateUrl: "./chat-item.component.html",
  styles: [
    `
      .chat-item {
        margin-bottom: 0.5rem;
        border-radius: 6px;
        border-color: rgb(37, 39, 45);
        border: 1px solid rgb(37, 39, 45);
        background-color: transparent;
      }

      .chat-item-inner {
        align-items: center;
        padding: 12px 12px;
        cursor: pointer;
      }

      .chat-icon {
        line-height: 10px;
      }

      .chat-item-action {
        color: rgb(99, 226, 183);
        background-color: #25272d;
      }
    `,
  ],
})
export class ChatItemComponent implements OnInit {
  @Input() chatValue: Partial<ChatBriefFragment>;

  @Input() action: boolean = false;

  @Output() readonly chatClick = new EventEmitter();

  @Output() readonly chatDelete = new EventEmitter();

  constructor(private http: _HttpClient) {}

  ngOnInit(): void {}

  onClick() {
    this.chatClick.emit();
  }
  deleteChat() {
    this.chatDelete.emit();
  }
}
