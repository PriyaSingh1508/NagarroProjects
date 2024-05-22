import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileComplaintComponent } from './file-complaint/file-complaint.component';
import { FileComplaintFormComponent } from './file-complaint-form/file-complaint-form.component';

const routes: Routes = [
  {path:"file-complaint",component:FileComplaintFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintRoutingModule { }
