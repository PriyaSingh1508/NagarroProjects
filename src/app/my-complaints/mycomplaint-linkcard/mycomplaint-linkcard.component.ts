import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mycomplaint-linkcard',
  templateUrl: './mycomplaint-linkcard.component.html',
  styleUrl: './mycomplaint-linkcard.component.scss'
})
export class MycomplaintLinkcardComponent {
@Input() content: string;
}
