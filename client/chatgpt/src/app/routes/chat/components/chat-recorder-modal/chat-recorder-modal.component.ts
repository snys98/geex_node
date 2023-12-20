import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import * as signalR from "@aspnet/signalr";
import { JWTTokenModel } from "@delon/auth";
import * as base64 from "base64-js";
import { tr } from "date-fns/locale";
import { stringify } from "json5";
import RecordRTC, { StereoAudioRecorder } from "recordrtc";

import { environment } from "../../../../../environments/environment";
import { BusinessComponentBase } from "../../../../shared/components/business.component.base";
import { SpeechToTextItem, SpeechToTextItemType } from "../../../../shared/graphql/.generated/type";

@Component({
  selector: "app-chat-recorder-modal",
  templateUrl: "./chat-recorder-modal.component.html",
  styles: [
    `
      ::ng-deep .ant-modal-footer {
        display: flex;
        justify-content: space-between;
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.2;
        }
        100% {
          opacity: 1;
        }
      }

      ::ng-deep .blinking {
        animation: blink ease-in-out 1.2s infinite;
      }
    `,
  ],
})
export class ChatRecorderModalComponent extends BusinessComponentBase implements OnInit, OnDestroy {
  recognizedText: string = "";
  hubConnection: signalR.HubConnection;
  recordRTC: RecordRTC;
  @ViewChild("#audioVisualizer")
  audioVisualizer: HTMLCanvasElement;
  audioBase64: string;
  isRecording: boolean;
  mediaStream: MediaStream;
  baseText: string = "";
  prepare(params: any) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.stopRecognition();
  }

  async initHub() {
    let token = this.tokenSrv.get<JWTTokenModel>();
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.api.baseUrl}/speech-to-text`, {
        accessTokenFactory: () => token?.token ?? "",
      }) // 设置你需要的语言
      .build();

    this.hubConnection.on("SpeechToTextUpdated", (item: SpeechToTextItem) => {
      console.log("SpeechToTextUpdated:", item);
      this.updateInput(item);
    });

    try {
      await this.hubConnection.start();
      console.log("Connected to SpeechToTextHub");
    } catch (error) {
      console.error("Error connecting to SpeechToTextHub:", error);
    }
  }

  public async startRecognition() {
    await this.initHub();

    this.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.recordRTC = new RecordRTC(this.mediaStream, {
      type: "audio",
      mimeType: "audio/wav",
      recorderType: StereoAudioRecorder,
      numberOfAudioChannels: 1,
      desiredSampRate: 16000,
      bitrate: 16000,
      bufferSize: 16384,
      timeSlice: 1000,
      ondataavailable: async (blob: Blob) => {
        var arrayBuffer = await blob.arrayBuffer();
        const base64Audio = base64.fromByteArray(new Uint8Array(arrayBuffer));
        await this.hubConnection.send("SpeechToText", base64Audio);
      },
    });

    this.recordRTC.startRecording();
    this.isRecording = true;
  }

  public async stopRecognition() {
    this.recordRTC?.stopRecording(async () => {
      const recordedBlob = this.recordRTC.getBlob();
      var arrayBuffer = await recordedBlob.arrayBuffer();
      this.audioBase64 = base64.fromByteArray(new Uint8Array(arrayBuffer));
      this.mediaStream?.getAudioTracks()?.forEach(track => {
        track?.stop();
      });
      await this.hubConnection?.stop();
      this.isRecording = false;
    });
  }

  updateInput(message: SpeechToTextItem) {
    console.log("updateInput:", stringify(message));
    let text = message.newText;
    let type = message.type;
    let [start, end] = message.replaceRange ?? [0, 0];
    if (type == SpeechToTextItemType.Append) {
      // startText = tempText = text;
      this.baseText += text;
      this.recognizedText = this.baseText;
      // textInput.value += startText;
    } else {
      //删除stack中start到end的元素
      // startText = "";
      // tempText = text;
      // textInput.value = baseText + text;
      this.recognizedText = this.baseText + text;
    }
  }
}
