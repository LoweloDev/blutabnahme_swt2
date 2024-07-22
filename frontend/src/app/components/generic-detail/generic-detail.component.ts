import {Component, Input} from '@angular/core';
import {AsyncPipe, KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {ActivatedRoute, Router} from "@angular/router";
import {StateService} from "../../../services/state-service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-generic-detail',
  standalone: true,
  imports: [
    MatCardTitle,
    KeyValuePipe,
    MatCardContent,
    MatCardHeader,
    MatCard,
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './generic-detail.component.html',
  styleUrl: './generic-detail.component.css'
})
export class GenericDetailComponent<T> {
  @Input() dataSource: Observable<Record<any, any>>;

  constructor(private readonly route: ActivatedRoute, private readonly stateService: StateService) {}
  ngOnInit(): void {
    const service = this.stateService.genericComponentServiceMap.get('blutabnahmen');
    this.dataSource = service.get(this.route.snapshot.params['id']);
  }
}
