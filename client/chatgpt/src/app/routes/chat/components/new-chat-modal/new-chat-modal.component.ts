import { ChangeDetectionStrategy, Component, Injector, inject } from "@angular/core";
import { FormBuilder, FormGroup, TypedFormGroup, Validators } from "@angular/forms";
import { uniqueId } from "lodash-es";
import { NzModalRef } from "ng-zorro-antd/modal";
import { v4 as uuidv4 } from "uuid";

import { BusinessComponentBase } from "../../../../shared/components/business.component.base";
import { AiModel, ChatMaterial, CreateChatGql, CreateChatInput } from "../../../../shared/graphql/.generated/type";
import { AppActions } from "../../../../shared/states/AppActions";
import { ChatState } from "../../../../shared/states/chat.state";

@Component({
  selector: "app-new-chat-modal",
  templateUrl: "./new-chat-modal.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewSessionModalComponent extends BusinessComponentBase {
  createForm: TypedFormGroup<CreateChatInput>;
  AiModel = AiModel;
  ChatMaterial = ChatMaterial;
  /**
   *
   */
  constructor(private injector: Injector, private modalRef: NzModalRef, private chatState: ChatState) {
    super(injector);
  }
  prepare(params: any) {
    let fb = this.injector.get(FormBuilder);
    this.createForm = fb.build<CreateChatInput>({
      aiModel: AiModel.Geecher,
      title: "New Teacher",
      sessionToken: uuidv4(),
      chatMaterial: ChatMaterial.OrganizeMeeting,
    });
  }

  handleCancel(): void {
    this.modalRef.destroy();
  }

  async handleSubmit(): Promise<void> {
    if (this.createForm.invalid) {
      return;
    }

    const formData = this.createForm.value;

    await this.chatState.dispatch(new AppActions.Chat.CreateChat(formData));

    this.modalRef.destroy();
  }
}
