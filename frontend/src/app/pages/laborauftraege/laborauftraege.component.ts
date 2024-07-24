import {Component, OnInit} from '@angular/core';
import {Laborauftrag} from "../../../models/laborauftrag";
import {LaborauftragService} from "../../../services/laborauftrag-service";
import {GenericTableComponent} from "../../components/generic-table/generic-table.component";
import {ContentWrapperComponent} from "../../components/content-wrapper/content-wrapper.component";
import {StateService} from "../../../services/state-service";

@Component({
  selector: 'app-laborauftraege',
  standalone: true,
  imports: [
    GenericTableComponent,
    ContentWrapperComponent
  ],
  templateUrl: './laborauftraege.component.html',
  styleUrl: './laborauftraege.component.css'
})
export class LaborauftraegeComponent implements OnInit {
  protected laborauftrage: Laborauftrag[] = [];

  constructor(private service: LaborauftragService, private readonly stateService: StateService) {
  }
  ngOnInit() {
    this.stateService.genericComponentServiceMap.set('laborauftrag', this.service);
    this.service.getAll().subscribe((data) => {
      this.laborauftrage = data;
    });
  }

}
