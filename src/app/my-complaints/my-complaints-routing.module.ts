import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycomplaintComponent } from './mycomplaint/mycomplaint.component';

const routes: Routes = [
  //{path:'my-complaints', component:MycomplaintComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyComplaintsRoutingModule { }
