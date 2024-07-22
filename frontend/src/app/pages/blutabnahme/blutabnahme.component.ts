import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ScanComponent } from "../../components/scan/scan.component";
import { MatStep, MatStepLabel, MatStepper, MatStepperNext } from "@angular/material/stepper";
import {JsonPipe, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
import {MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import { PopupService } from "../../../services/popup-service";
import { Blutabnahme } from "../../../models/blutabnahme";
import { Probe } from "../../../models/probe";
import { Laborauftrag } from "../../../models/laborauftrag";
import { LaborauftragDialogComponent } from "../../components/laborauftrag-dialog/laborauftrag-dialog.component";
import {GenericDialogType} from "../../../consts/enums";
import {LaborauftragSelectedComponent} from "../../components/laborauftrag-selected/laborauftrag-selected.component";
import {Router, RouterLink} from "@angular/router";
import {BlutabnahmeService} from "../../../services/blutabnahme-service";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {StateService} from "../../../services/state-service";
import {catchError, of, take} from "rxjs";
import {MatIcon} from "@angular/material/icon";
import {ContentWrapperComponent} from "../../components/content-wrapper/content-wrapper.component";

// TODO NFC & external scan

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
    LaborauftragSelectedComponent,
    NgIf,
    NgTemplateOutlet,
    MatIconButton,
    MatIcon,
    ContentWrapperComponent,
    MatFabButton,
    RouterLink
  ],
  templateUrl: './blutabnahme.component.html',
  styleUrls: ['./blutabnahme.component.css']
})
export class BlutabnahmeComponent implements OnInit {
  isDesktop: boolean = true;
  @ViewChild(MatStepper, { static: false })
  stepper?: MatStepper;
  currentStep = 0;
  scanData: { patient_id?: string, mitarbeiter_id?: string, probe_id?: string } | any = { };
  blutabnahme: Map<Laborauftrag, Blutabnahme>;
  probe: Map<Blutabnahme, Probe>;
  laborauftrags: Laborauftrag[] = [];

  constructor(public dialog: MatDialog, protected popupService: PopupService, private router: Router, private blutAbnahmeService: BlutabnahmeService, private breakpointObserver: BreakpointObserver, private stateService: StateService) {}

  getCurrentStateOfDataset = (additionalData: any) => {
    return {
      ...additionalData,
      patient: this.scanData.patient_id,
      mitarbeiter: this.scanData.mitarbeiter_id,
      blutabnahme: this.blutabnahme,
      probe: this.probe,
      laborauftrag: this.laborauftrags,
      filters: {
        patient_id: this.scanData.patient_id,
      },
    }
  }

  scanCallback = (result: any, key: string) => {
    if (result) {
      this.scanData[key] = result[key];
      this.currentStep++;
      this.stepper?.next();
    } else {
      this.popupService.showError(
        {
          title: 'Error',
          message: 'Scan failed. Please try again.'
        }
      );
    }
  }

  laboratoryCallback = (result: any) => {
    if (result) {
      this.laborauftrags = result;
    } else {
      this.popupService.showError(
        {
          title: 'Error',
          message: 'Laboratory data not found.'
        }
      );
    }
  }

  submitting: boolean = false;

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isDesktop = !result.matches;
    });

    this.stateService.blutabnahmeSubject.pipe(take(1)).subscribe((blutabnahme) => {
      this.showSummary(blutabnahme);
    })
  }
  async submitData() {
    this.submitting = true;
      this.blutAbnahmeService.createBatch(Array.from(this.blutabnahme.values())).pipe(
        catchError((error) => {
          console.error(error);
          this.popupService.showError(
            {
              title: 'Error',
              message: 'Data submission failed'
            }
          );
          return of(undefined);
        }
      )).subscribe((result) => {
        if(result) {
          this.popupService.showSuccess({
            title: 'Success',
            message: 'Data submitted successfully'
          });
          this.submitting = false;
          this.redirectToDashboard();
        }
        this.submitting = false;
      });
  }

  showSummary(blutabnahmeMap: any) {
    this.blutabnahme = blutabnahmeMap;
    this.currentStep++;
    this.stepper?.next();
  }
  async redirectToDashboard() {
    await this.router.navigate(['/dashboard']);
  }

  protected readonly ScanComponent = ScanComponent;
  protected readonly LaborauftragDialogComponent = LaborauftragDialogComponent;
  protected readonly GenericDialogType = GenericDialogType;

  cancelStepper() {
    this.router.navigate(['/dashboard']);
  }
}
