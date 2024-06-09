import {Component, Input} from '@angular/core';
import {Laborauftrag} from "../../../models/laborauftrag";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-laborauftrag-selected',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './laborauftrag-selected.component.html',
  styleUrl: './laborauftrag-selected.component.css'
})
export class LaborauftragSelectedComponent {
  @Input() laborauftrags: Laborauftrag[] = [];
}
