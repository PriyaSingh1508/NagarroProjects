import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mycomplaint-info-card',
  templateUrl: './mycomplaint-info-card.component.html',
  styleUrl: './mycomplaint-info-card.component.scss'
})
export class MycomplaintInfoCardComponent {
  @Input() status: string;
  @Input() complaintId: string;
  @Input()  complaintTitle:string;
  @Input()  daysBack:number;
  @Input() amount:string;
}
