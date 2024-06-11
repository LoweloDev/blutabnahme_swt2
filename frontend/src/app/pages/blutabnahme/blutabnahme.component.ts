import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ScanComponent } from "../../components/scan/scan.component";
import { MatStep, MatStepLabel, MatStepper, MatStepperNext } from "@angular/material/stepper";
import {JsonPipe, NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";
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
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {StateService} from "../../../services/state-service";
import {take} from "rxjs";

// TODO DEsign fixes
// TODO Filter von TAbelle automatisch
// TODO abbruch stepper
// TODO error handling
// TODO generify dialog
// TODO data management page
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
    NgTemplateOutlet
  ],
  templateUrl: './blutabnahme.component.html',
  styleUrls: ['./blutabnahme.component.css']
})
export class BlutabnahmeComponent implements OnInit {
  isDesktop: boolean = true;
  @ViewChild(MatStepper, { static: false })
  stepper?: MatStepper;
  currentStep = 0;
  scanData: { patient?: string, mitarbeiter?: string, probe?: string } | any = { };
  blutabnahme: Map<Laborauftrag, Blutabnahme>;
  probe: Map<Blutabnahme, Probe>;
  laborauftrags: Laborauftrag[] = [];

  constructor(public dialog: MatDialog, protected popupService: PopupService, private router: Router, private blutAbnahmeService: BlutabnahmeService, private breakpointObserver: BreakpointObserver, private stateService: StateService) {}

  getCurrentStateOfDataset = (additionalData: any) => {
    return {
      ...additionalData,
      patient: this.scanData.patient,
      mitarbeiter: this.scanData.mitarbeiter,
      blutabnahme: this.blutabnahme,
      probe: this.probe,
      laborauftrag: this.laborauftrags,
      filters: this.scanData,
    }
  }

  scanCallback = (result: any, key: string) => {
    console.log(result, key)
    if (result) {
      this.scanData[key] = result[key];
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

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isDesktop = !result.matches;
    });

    this.stateService.blutabnahmeSubject.pipe(take(1)).subscribe((blutabnahme) => {
      console.log("CHAGNED");
      console.log(blutabnahme);
      // this.blutabnahme = blutabnahme;
      this.showSummary(blutabnahme);
    })
  }
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

  showSummary(blutabnahmeMap: any) {
    console.log("HEREHEREHRE")
    console.log(blutabnahmeMap)
    // next step
    this.blutabnahme = blutabnahmeMap;
    this.currentStep++;
    this.stepper?.next();
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
