import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComplaintsRoutingModule } from './my-complaints-routing.module';
import { MycomplaintComponent } from './mycomplaint/mycomplaint.component';
import { MycomplaintLinkcardComponent } from './mycomplaint-linkcard/mycomplaint-linkcard.component';
import { MycomplaintInfoCardComponent } from './mycomplaint-info-card/mycomplaint-info-card.component';

@NgModule({
  declarations: [

    MycomplaintComponent,
      MycomplaintLinkcardComponent,
      MycomplaintInfoCardComponent
  ],
  imports: [
    CommonModule,
    MyComplaintsRoutingModule
  ],
  exports:[MycomplaintComponent]
})
export class MyComplaintsModule { }
