import {Component, Input} from '@angular/core';
import {AsyncPipe, KeyValuePipe, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
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
    AsyncPipe,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './generic-detail.component.html',
  styleUrl: './generic-detail.component.css'
})
export class GenericDetailComponent {
  @Input() dataSource: Observable<Record<any, any>>;

  constructor(private readonly route: ActivatedRoute, private readonly stateService: StateService) {}
  ngOnInit(): void {
    const service = this.stateService.genericComponentServiceMap.get('blutabnahmen');
    this.dataSource = service.get(this.route.snapshot.params['id']);
  }

  getType(value: any): string {
    if (Array.isArray(value)) return 'array';
    if (value && typeof value === 'object') return 'object';
    return 'primitive';
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
