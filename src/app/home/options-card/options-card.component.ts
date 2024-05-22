import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options-card',
  templateUrl: './options-card.component.html',
  styleUrl: './options-card.component.scss'
})
export class OptionsCardComponent {
  @Input() heading: string;
  
}
