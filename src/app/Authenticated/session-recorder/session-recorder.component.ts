import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FrameService } from '../../services/frame.service';

@Component({
  selector: 'app-session-recorder',
  templateUrl: './session-recorder.component.html',
  styleUrl: './session-recorder.component.css',
})
export class SessionRecorderComponent implements AfterViewInit {
  // FrameService injection for frame processing
  constructor(private frameService: FrameService) {}

  // Angular decorator meaning that it's related to DOM Element and therefore is a ref to videoElement (video tag from HTML)
  @ViewChild('videoElement') videoElement!: ElementRef;
  // Variable containing the HTML video element
  video!: HTMLVideoElement;

  ngAfterViewInit(): void {
    this.video = this.videoElement.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.video.srcObject = stream;
          this.video.play();
          // this.captureFrames();
        })
        .catch((error) =>
          console.error('Erreur lors de la capture de la webcam : ', error)
        );
    }
  }
  // #TODO : build function to call back-end API on each frame captured by the webcam
  // #TODO : build services for it
  captureFrames(): void {}
}
