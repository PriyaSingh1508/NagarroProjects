import { Component } from '@angular/core';
import { ComplaintModel, MycomplaintsService,  } from '../mycomplaints.service';


@Component({
  selector: 'app-mycomplaint',
  templateUrl: './mycomplaint.component.html',
  styleUrl: './mycomplaint.component.scss'
})
export class MycomplaintComponent {
  public complaints: ComplaintModel[] = [];
constructor(private myComplaintService:MycomplaintsService){}



ngOnInit(): void {
  this.getComplaints();
}

getComplaints(): void {
  this.myComplaintService.getData('../../../assets/data/complaints.json').subscribe(
    (data: any) => {
   
      this.complaints = data;
    
      //console.log(this.complaints);
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}

}
