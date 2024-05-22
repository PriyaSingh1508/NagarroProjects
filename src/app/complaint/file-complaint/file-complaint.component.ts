import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-complaint',
  templateUrl: './file-complaint.component.html',
  styleUrl: './file-complaint.component.scss'
})
export class FileComplaintComponent {
  @Output() toggleForm=new EventEmitter<boolean>();


}
