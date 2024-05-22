import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintRoutingModule } from './complaint-routing.module';
import { FileComplaintComponent } from './file-complaint/file-complaint.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyFormComponent } from './company-form/company-form.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { FileComplaintFormComponent } from './file-complaint-form/file-complaint-form.component';
import { ReviewAndSubmitComponent } from './review-and-submit/review-and-submit.component';
import { RecaptchaModule } from "ng-recaptcha";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    FileComplaintComponent,
    ConsumerFormComponent,
    CompanyFormComponent,
    ComplaintFormComponent,
    PaymentFormComponent,
    FileComplaintFormComponent,
    ReviewAndSubmitComponent,
    
  ],
  imports: [
    CommonModule,
    ComplaintRoutingModule,
    SharedModule,
   RecaptchaModule,
   NgxMaskDirective,
   NgxMaskPipe
  ],
  exports:[FileComplaintComponent,ConsumerFormComponent,CompanyFormComponent,ComplaintFormComponent,PaymentFormComponent,FileComplaintFormComponent],
  providers:[provideNgxMask()]

})
export class ComplaintModule { }
