import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZXingScannerComponent, ZXingScannerModule} from "@zxing/ngx-scanner";
import {BarcodeFormat} from "@zxing/browser";
import jsQR from "jsqr";

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [
    ZXingScannerModule
  ],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent implements OnInit{
  @ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  videoElement: HTMLVideoElement;
  canvasElement: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    console.log("HELLO TEST");
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;

    this.startCamera();
  }

  startCamera() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        this.videoElement.srcObject = stream;
        this.videoElement.setAttribute('playsinline', 'true'); // required to tell iOS safari we don't want fullscreen
        this.videoElement.play();
        requestAnimationFrame(this.tick.bind(this));
      })
      .catch(err => {
        console.error(err);
      });
  }

  tick() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
      this.canvasContext.drawImage(this.videoElement, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        console.log('Scanned code:', code.data);
        window.alert(`Scanned code:${code.data}`);
        // Optionally, you can stop the camera or perform any other action here
      }
    }
    requestAnimationFrame(this.tick.bind(this));
  }
}
