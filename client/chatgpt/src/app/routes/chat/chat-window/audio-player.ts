import * as base64 from "base64-js";
import { BehaviorSubject, Subject, combineLatest, delayWhen, filter, switchMap, tap } from "rxjs";

import { Buffer } from "buffer";
export class AudioPlayer {
  private audioBuffer$: Subject<ArrayBuffer> = new Subject<ArrayBuffer>();
  private player: HTMLAudioElement = new Audio();
  sourceBuffer: SourceBuffer;
  private init$ = new BehaviorSubject<boolean>(false);
  private updating$ = new BehaviorSubject<boolean>(false);
  constructor() {
    window["audioPlayer"] = this;
    let mediaSource = new MediaSource();
    mediaSource.onsourceended = () => {
      this.player.play();
    };
    mediaSource.onsourceopen = () => {
      this.sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");
      this.sourceBuffer.onupdateend = () => {
        this.updating$.next(false);
      };
      this.sourceBuffer.onupdatestart = () => {
        this.updating$.next(true);
      };
      this.init$.next(true);
    };

    this.player.src = URL.createObjectURL(mediaSource);
    combineLatest([this.init$, this.updating$])
      .pipe(
        filter(([init, updating]) => init && !updating),
        switchMap(() => this.audioBuffer$),
        tap(() => this.player.play()),
      )
      .subscribe(data => {
        this.sourceBuffer.appendBuffer(data);
      });
  }
  async enqueueAudio(audio) {
    const newAudioArray = base64.toByteArray(audio).buffer;
    this.audioBuffer$.next(newAudioArray);
  }
}
