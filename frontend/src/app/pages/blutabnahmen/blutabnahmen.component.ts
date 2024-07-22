import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ContentWrapperComponent} from "../../components/content-wrapper/content-wrapper.component";
import {GenericTableComponent} from "../../components/generic-table/generic-table.component";
import {Laborauftrag} from "../../../models/laborauftrag";
import {LaborauftragService} from "../../../services/laborauftrag-service";
import {Blutabnahme} from "../../../models/blutabnahme";
import {BlutabnahmeService} from "../../../services/blutabnahme-service";
import {StateService} from "../../../services/state-service";

@Component({
  selector: 'app-blutabnahmen',
  standalone: true,
  imports: [
    ContentWrapperComponent,
    GenericTableComponent
  ],
  templateUrl: './blutabnahmen.component.html',
  styleUrl: './blutabnahmen.component.css'
})
export class BlutabnahmenComponent implements OnInit {
  protected blutabnahmen: Blutabnahme[] = [];

  constructor(private service: BlutabnahmeService, private cdr: ChangeDetectorRef, private stateService: StateService) {}

  ngOnInit() {
    this.stateService.genericComponentServiceMap.set('blutabnahmen', this.service);
    this.service.getAll().subscribe((data) => {
      this.blutabnahmen = data;
      console.log(this.blutabnahmen);
      this.cdr.detectChanges();
    });
  }
}
