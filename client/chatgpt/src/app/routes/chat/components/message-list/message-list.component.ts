import { Component, ElementRef, Injector, OnInit, Renderer2, ViewChild } from "@angular/core";
import { _HttpClient } from "@delon/theme";
import { Store } from "@ngxs/store/src/store";
import { uniqueId } from "lodash-es";
import { ModalButtonOptions } from "ng-zorro-antd/modal";
import { MermaidAPI } from "ngx-markdown";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from "uuid";

import { BusinessComponentBase } from "../../../../shared/components/business.component.base";
import {
  AiModel,
  ChatBriefFragment,
  ChatDetailFragment,
  ChatMessageRole,
  ChatMessageType,
} from "../../../../shared/graphql/.generated/type";
import { AppActions } from "../../../../shared/states/AppActions";
import { ChatState } from "../../../../shared/states/chat.state";
import { ChatRecorderModalComponent } from "../chat-recorder-modal/chat-recorder-modal.component";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.less"],
})
export class MessageListComponent extends BusinessComponentBase {
  prepare(params: any) {
    throw new Error("Method not implemented.");
  }
  array = ["写一首诗", "编写小说", "创作歌曲", "你是一只猫", "超能力", "穿越时空", "量子力学", "人工智能"];

  text: string = "";
  viewText = true;
  chatMessageRole = ChatMessageRole;

  @ViewChild("scrollableDiv", { static: true }) scrollableDiv: ElementRef;

  options: MermaidAPI.Config = {
    theme: MermaidAPI.Theme.Forest,
    fontFamily: "consolas",
  };
  activeChat$: Observable<ChatBriefFragment>;

  constructor(private http: _HttpClient, public chatState: ChatState, private renderer: Renderer2, private injector: Injector) {
    super(injector);
    this.activeChat$ = this.chatState.activeChat$;
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.chatState.messages$.subscribe(messages => {
      this.scrollDown();
    });
  }

  onScroll(event: any) {
    if (this.isScrollAtBottom()) {
      this.scrollDown();
    }
  }

  isScrollAtBottom() {
    let nativeElement = this.scrollableDiv?.nativeElement;
    return nativeElement?.scrollHeight - nativeElement?.scrollTop === nativeElement?.clientHeight;
  }

  scrollDown() {
    let nativeElement = this.scrollableDiv?.nativeElement;
    if (nativeElement) {
      this.renderer.setProperty(nativeElement, "scrollTop", nativeElement?.scrollHeight);
    }
  }

  async handleKeyPress(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      this.chatState.dispatch(new AppActions.Chat.SendMessage(ChatMessageType.Text, this.text));
      this.text = "";
    }
  }

  handleRecordButtonClick() {
    this.nzModalSrv.create({
      nzTitle: "语音识别",
      nzContent: ChatRecorderModalComponent,
      nzOnOk: component => {
        component.stopRecognition();
        this.chatState.dispatch(new AppActions.Chat.SendMessage(ChatMessageType.Audio, component.recognizedText, component.audioBase64));
      },
      nzOnCancel: component => {
        component.stopRecognition();
      },
      nzWidth: 360,
    });
  }

  handleSendButtonClick() {}

  async quickChat(text: string, title: string) {
    await this.chatState.dispatch(
      new AppActions.Chat.CreateChat({
        aiModel: AiModel.Geecher,
        sessionToken: uuidv4(),
        title: title,
      }),
    );
    await this.chatState.dispatch(new AppActions.Chat.SendMessage(ChatMessageType.Text, text));
  }
}
