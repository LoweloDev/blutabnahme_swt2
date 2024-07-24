import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {BarcodeFormat} from "@zxing/browser";

import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {ZXingScannerComponent, ZXingScannerModule} from "@zxing/ngx-scanner";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

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
  stepData: any;

  constructor(
    public dialogRef: MatDialogRef<ScanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.stepData = data;
  }

  save(): void {
    this.dialogRef.close(this.stepData);
  }

  cancel(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    try {
      this.scanAllowedCodes();
    } catch (e) {
      console.error("stepData: 'Help me I got stuck!'", e);
      this.cancel();
    }
  }

  public scanAllowedCodes() {
    if (!this.scanner) {
      console.error("Scanner not found");
      return;
    }

    this.scanner.autofocusEnabled = true;

    this.scanner.scanSuccess.subscribe((result: string) => {
      console.log("Scan result: ", result)
      console.log("Step data: ", this.stepData)
      this.stepData[this.stepData.stepId] = result;
      this.save();
    });
  }
}
