import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Laborauftrag} from "../../../models/laborauftrag";
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import {
  MatAccordion, MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {Probe} from "../../../models/probe";
import {Blutabnahme} from "../../../models/blutabnahme";
import {PopupService} from "../../../services/popup-service";
import {MatStepper} from "@angular/material/stepper";
import {ScanComponent} from "../scan/scan.component";
import {StateService} from "../../../services/state-service";

@Component({
  selector: 'app-laborauftrag-selected',
  standalone: true,
  imports: [
    JsonPipe,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatIconModule,
    MatButtonModule,
    MatButton,
    MatExpansionModule,
    DatePipe,
    NgForOf
  ],
  templateUrl: './laborauftrag-selected.component.html',
  styleUrl: './laborauftrag-selected.component.css'
})
export class LaborauftragSelectedComponent {
  @Input() laborauftrags: Laborauftrag[] = [];
  @Input() authorization: { patient_id: string, mitarbeiter_id: string, [key: string]: string } = { patient_id: '', mitarbeiter_id: '' };
  blutabnahme: Map<Laborauftrag, Blutabnahme> = new Map<Laborauftrag, Blutabnahme>();
  probe: Probe[] = [];
  probeMap: Map<string, Probe[]> = new Map<string, Probe[]>();
  currentLaborauftrag?: Laborauftrag;
  constructor(protected popupService: PopupService, private stateService: StateService) {
  }

  handleLaborauftrag = (laborauftrag: Laborauftrag) => {
    this.currentLaborauftrag = laborauftrag;
    this.popupService.openStepDialog(ScanComponent, { stepId: 'probe', laborauftrag: laborauftrag }, this.scanCallback);
  }

  scanCallback = (result: any, key: any) => {
    const laborauftrag = this.currentLaborauftrag;
    if (result && laborauftrag) {
      const blutabnahme: Blutabnahme = {
        laborauftrag_id: laborauftrag?.id,
        laborauftrag: { ...laborauftrag },
        timestamp: new Date(),
        mitarbeiter_id: this.authorization.mitarbeiter_id,
        patient_id: this.authorization.patient_id,
        proben: [],
      };
      const materialart = laborauftrag?.id.slice(-4);
      this.probe.push({ id: result[key], material: materialart, timestamp: new Date()});
      this.probeMap.set(laborauftrag.id, this.probe);
      blutabnahme.proben = this.probe;
      this.blutabnahme.set(laborauftrag, blutabnahme);
      } else {
      this.popupService.showError(
        {
          title: 'Fehler',
          message: 'Fehler beim Scannen',
        }
      );
    }
  }
  protected readonly ScanComponent = ScanComponent;

  submitBlutabnahmeData() {
    this.stateService.blutabnahmeSubject.next(this.blutabnahme);
  }

  protected readonly Probe = Probe;
}
