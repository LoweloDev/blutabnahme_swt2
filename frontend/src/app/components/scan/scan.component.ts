import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {BarcodeFormat} from "@zxing/browser";

import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {ZXingScannerComponent, ZXingScannerModule} from "@zxing/ngx-scanner";

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    NgIf,
    ZXingScannerModule
  ],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent implements OnInit, AfterViewInit {
  @ViewChild(ZXingScannerComponent, { static: false })
  public scanner?: ZXingScannerComponent;
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX ];

  constructor() { }

  ngOnInit(): void {
    window.alert("TEST");
  }

  ngAfterViewInit(): void {
    this.scanAllowedCodes();
  }

  public scanAllowedCodes() {
    if (!this.scanner) {
      console.error("Scanner not found");
      return;
    }

    this.scanner.autofocusEnabled = true;

    this.scanner.scanSuccess.subscribe((result: string) => {
      window.alert('Barcode result: ' + result);
    });
  }
}
