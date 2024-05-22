import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ComplaintModule } from './complaint/complaint.module';
import { AppRoutesModule } from './app-routes.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth.service';
import { MyComplaintsModule } from './my-complaints/my-complaints.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    SharedModule.forRoot([]),
    ComplaintModule,
    LoginModule,
    MyComplaintsModule,
    RecaptchaModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],

  declarations: [AppComponent],

  exports: [],

  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    AuthService,
    provideNgxMask(),
 
    
  ],

  bootstrap: [AppComponent],
})

// Class represent root module
export class AppModule {}
