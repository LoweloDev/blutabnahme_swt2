import { Component } from '@angular/core';
import {ContentWrapperComponent} from "../../components/content-wrapper/content-wrapper.component";
import {GenericTableComponent} from "../../components/generic-table/generic-table.component";
import {Probe} from "../../../models/probe";
import {ProbeService} from "../../../services/probe-service";
import {StateService} from "../../../services/state-service";

@Component({
  selector: 'app-proben',
  standalone: true,
    imports: [
        ContentWrapperComponent,
        GenericTableComponent
    ],
  templateUrl: './proben.component.html',
  styleUrl: './proben.component.css'
})
export class ProbenComponent {
  protected proben: Probe[] = [];

  constructor(private service: ProbeService, private readonly stateService: StateService) {

  }
  ngOnInit() {
    this.stateService.genericComponentServiceMap.set('probe', this.service);
    this.service.getAll().subscribe((data) => {
      this.proben = data;
    });
  }
}
