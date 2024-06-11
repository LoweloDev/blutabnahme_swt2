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
  @Input() authorization: { patient: string, mitarbeiter: string, [key: string]: string } = { patient: '', mitarbeiter: '' };
  blutabnahme: Map<Laborauftrag, Blutabnahme> = new Map<Laborauftrag, Blutabnahme>();
  probe: Probe[] = [];
  currentLaborauftrag?: Laborauftrag;
  // @Output() blutabnahmeCompletedEvent = new EventEmitter<any>();
  constructor(protected popupService: PopupService, private stateService: StateService) {
  }

  // Event emitter broken loses observer probably. Open Issue in angular
  // submitBlutabnahmeData(): void {
  //   console.log(this.blutabnahme)
  //   this.blutabnahmeCompletedEvent.emit(this.blutabnahme);
  //   console.log("HERE")
  // }



  handleLaborauftrag = (laborauftrag: Laborauftrag) => {
    this.currentLaborauftrag = laborauftrag;
    this.popupService.openDialog(ScanComponent, { stepId: 'probe', laborauftrag: laborauftrag }, this.scanCallback);
  }

  scanCallback = (result: any, key: any) => {
    const laborauftrag = this.laborauftrags.find((laborauftrag) => laborauftrag.id === this.currentLaborauftrag?.id);
    if (result && laborauftrag) {
      const blutabnahme: Blutabnahme = {
        laborauftrag_id: laborauftrag?.id,
        timestamp: new Date(),
        mitarbeiter_id: this.authorization.mitarbeiter,
        patient_id: this.authorization.patient,
        proben: [],
      };
      // find laborauftrag
      // last 4 digits of laborAuftragId
      console.log(blutabnahme);
      console.log(laborauftrag?.id);
      const materialart = laborauftrag?.id.slice(-4);

      console.log(materialart)
      console.log(
        result
      )
      this.probe.push({ blutabnahme_id: key, id: result[key], material: materialart, timestamp: new Date()});
      blutabnahme.proben = this.probe;
      this.blutabnahme.set(laborauftrag, blutabnahme);
      } else {
      this.popupService.showError({ message: "Halo I hans kein Daten bekomen bite fesuch nochmael k?" });
    }
  }
  protected readonly ScanComponent = ScanComponent;

  submitBlutabnahmeData() {
    this.stateService.blutabnahmeSubject.next(this.blutabnahme);
  }
}
