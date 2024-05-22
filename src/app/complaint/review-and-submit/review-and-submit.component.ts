import { Component, EventEmitter, Output } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import {v4 as uuidv4} from 'uuid'
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrl: './review-and-submit.component.scss'
})

export class ReviewAndSubmitComponent {
 
  consumer:Consumer={
    title:"",
    firstName:"",
    lastName:"",
    streetAddress:"",
    city:"",
    state:"",
    zipcode:"",
    dayPhone:"",
    evePhone:"",
    fax:"",
    email:"",
    servedInMilitary:"No"
  };
  company:CompanyInfo={
    company:"",
    representative:"",
    streetAddress:"",
    city:"",
    state:"",
    zipcode:"",
    companyPhone:"",
    website:""
  };
  complaint:Complaint={
    description:"",
    dateOccured:new Date(),
    datesComplained:[],
    complaintFiler:"",
    manufacturer:"",
    serialNumber:"",
    purchaseDate:new Date(),
    expirationDate:new Date(),
    supportingDocs:""
  
  };
  payment:Payment={
    paidForService:"No",
    paymentMethod:"",
    amountinDispute:0,
    description:"",
    contactedGovAgency:false,
    supportingDocs:"",
    agencyContacted:"",
    agencyContactPerson:"",
    address:"",
    assistanceReceived:"",
    contactedAttorney:false,
    courtActionPending:false
  };
  captchaResolved:boolean=false;
  @Output() updateFormStepsByNumber=new EventEmitter<number>();
  @Output() updateFormStepsByNumberAndNoProgress=new EventEmitter<number>();
  isChecked: boolean = false;
  constructor(private service:ComplaintService,private router :Router){

  }
 
  ngOnInit():void{
 
  this.service.getBlobData();
  // this.service.getBlobData().subscribe(res=>{
  //   console.log("res",res);
  //   console.log(JSON.parse(res));
  // },err=>{
  //   console.log(err);
  // })
  
  }
  getDetails(){
    this.consumer=this.service.getData('consumer');
    this.company=this.service.getData('company');
    this.complaint=this.service.getData('complaint');
    this.payment=this.service.getData('payment');
  }
  onSaveExit(){
    this.router.navigateByUrl('/my-complaints');
  }
  OnSubmit(){
    let data={
      uuid:uuidv4(),
      consumer:this.consumer,
      company:this.company,
      complaint:this.complaint,
      payment:this.payment


    }
    console.log("Review and Submit",data);
   let options='{"ContentType":"application/json"}';
    this.service.postBlob(data,options).subscribe(res=>{console.log(res)},err=>{
      console.log(err);
    });
    
  }

  resolved(captchaResponse: any) {
    if(this.isChecked){
    this.captchaResolved=true;
    }
  }
  
  
}

interface Consumer{
  title:string,
  firstName:string,
  lastName:string,
  streetAddress:string,
  city:string,
  state:string,
  zipcode:string,
  dayPhone:string,
  evePhone:string,
  fax:string,
  email:string,
  servedInMilitary:string
}
interface CompanyInfo{
  company:string,
  representative:string,
  streetAddress:string,
  city:string,
  state:string,
  zipcode:string,
  companyPhone:string,
  website:string
}
interface Complaint{
  description:string,
  dateOccured:Date,
  datesComplained:any[],
  complaintFiler:string,
  manufacturer:string,
  serialNumber:string,
  purchaseDate:Date,
  expirationDate:Date,
  supportingDocs:string

}

interface Payment{
  paidForService:string,
  paymentMethod:string,
  amountinDispute:number,
  description:string,
  contactedGovAgency:boolean,
  supportingDocs:string,
  agencyContacted:string,
  agencyContactPerson:string,
  address:string,
  assistanceReceived:string,
  contactedAttorney:boolean,
  courtActionPending:boolean
}