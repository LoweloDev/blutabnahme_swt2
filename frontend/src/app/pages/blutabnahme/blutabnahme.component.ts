import { Component, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ScanComponent } from "../../components/scan/scan.component";
import { MatStep, MatStepLabel, MatStepper, MatStepperNext } from "@angular/material/stepper";
import { JsonPipe, NgForOf } from "@angular/common";
import { MatButton } from "@angular/material/button";
import { PopupService } from "../../../services/popup-service";
import { ComponentType } from "@angular/cdk/portal";
import { Blutabnahme } from "../../../models/blutabnahme";
import { Probe } from "../../../models/probe";
import { Laborauftrag } from "../../../models/laborauftrag";
import { LaborauftragDialogComponent } from "../../components/laborauftrag-dialog/laborauftrag-dialog.component";
import {GenericDialogType} from "../../../consts/enums";
import {LaborauftragSelectedComponent} from "../../components/laborauftrag-selected/laborauftrag-selected.component";
import {Router} from "@angular/router";
import {BlutabnahmeService} from "../../../services/blutabnahme-service";

@Component({
  selector: 'app-blutabnahme',
  standalone: true,
  imports: [
    MatStepper,
    MatStep,
    NgForOf,
    MatStepLabel,
    MatButton,
    MatStepperNext,
    JsonPipe,
    LaborauftragSelectedComponent
  ],
  templateUrl: './blutabnahme.component.html',
  styleUrls: ['./blutabnahme.component.css']
})
export class BlutabnahmeComponent {
  @ViewChild(MatStepper, { static: false })
  stepper?: MatStepper;
  currentStep = 0;
  authorization: { patient: string, mitarbeiter: string, [key: string]: string } = { patient: '', mitarbeiter: '' };
  blutabnahme: Map<Laborauftrag, Blutabnahme>;
  probe: Map<Blutabnahme, Probe>;
  laborauftrags: Laborauftrag[] = [];

  constructor(public dialog: MatDialog, private popupService: PopupService, private router: Router, private blutAbnahmeService: BlutabnahmeService) {}

  openDialog(component: ComponentType<unknown>, additionalData: { stepId: string, [key: string]: any}, callback: (result: any, stepId: string) => void): void {
    const dialogRef = this.dialog.open(component, {
      data:{
        ...additionalData,
        authorization: this.authorization,
        blutabnahme: this.blutabnahme,
        probe: this.probe,
        laborauftrags: this.laborauftrags,
        filters: this.authorization,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      callback(result, additionalData.stepId);
    });
  }

  scanCallback = (result: any, key: string) => {
    if (result) {
      console.log(this.authorization)
      console.log(result);
      console.log(this);
      this.authorization[key] = result;
      this.currentStep++;
      this.stepper?.next();
    } else {
      this.popupService.showError({ message: "Halo I hans kein Daten bekomen bite fesuch nochmael k?" });
    }
  }

  laboratoryCallback = (result: any) => {
    if (result) {
      this.laborauftrags = result;
    } else {
      this.popupService.showError({ message: "Halo I hans kein Daten bekomen bite fesuch nochmael k?" });
    }
  }

  submitting: boolean = false;

  async submitData() {
    this.submitting = true;
    try {
      this.blutAbnahmeService.createBatchBlutabnahme(Array.from(this.blutabnahme.values()));
      this.showSuccessMessage();
      await this.redirectToDashboard();
    } catch (error) {
      console.error(error);
      this.popupService.showError({ message: 'Error submitting data' });
    } finally {
      this.submitting = false;
    }
  }

  showSuccessMessage() {
    setTimeout(() => {
      this.popupService.showError({ message: 'Data submitted successfully' })
    }, 2000);
  }

  async redirectToDashboard() {
    await this.router.navigate(['/dashboard']);
  }

  protected readonly ScanComponent = ScanComponent;
  protected readonly LaborauftragDialogComponent = LaborauftragDialogComponent;
  protected readonly GenericDialogType = GenericDialogType;
}
