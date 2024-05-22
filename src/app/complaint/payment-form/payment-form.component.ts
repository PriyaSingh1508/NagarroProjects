import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { complaintPayment } from '../complaintPayment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss'
})
export class PaymentFormComponent implements OnInit{
  selectedFile:File
  paymentForm:FormGroup
  // payment:Payment={
  //   paidForService:'Yes',
  //   paymentMethod:'',
  //   amountinDispute:0,
  //   description:'',
  //   contactedGovAgency:false,
  //   supportingDocs:''
  // }
  @Output() updateFormStepsByNumber=new EventEmitter<number>();
  @Output() updateFormStepsByNumberAndNoProgress=new EventEmitter<number>();
  @Output() nextButtonClicked = new EventEmitter<void>();
  constructor(private fb :FormBuilder,private service:ComplaintService,private router:Router) {
    let pay=this.service.getData('payment');
    if(pay){
      this.createForm1(pay);
    }else{
      this.createForm();
    }


  
    
  }
  ngOnInit(): void {
    
  }
  methods = [ 'Cash','Credit Card','Debit Card','UPI'];

  
  createForm(){
    this.paymentForm = this.fb.group({
      paidForService: [''],
      paymentMethod: [''],
      amountinDispute: [''],
      description: [''],
      contactedGovAgency: [false],
      supportingDocs: [null],
      agencyContacted:[''],
      agencyContactPerson:[''],
      address:[''],
      assistanceReceived:[''],
      contactedAttorney:[false],
      courtActionPending:[false]

      
    });
  }
  createForm1(pay:any){
    this.paymentForm = this.fb.group({
      paidForService: [pay.paidForService],
      paymentMethod: [pay.paymentMethod],
      amountinDispute: [pay.amountinDispute],
      description: [pay.description],
      contactedGovAgency: [pay.contactedGovAgency],
      supportingDocs: [pay.contactedGovAgency],
      agencyContacted:[pay.agencyContacted],
      agencyContactPerson:[pay.agencyContactPerson],
      address:[pay.address],
      assistanceReceived:[pay.assistanceReceived],
      contactedAttorney:[pay.contactedAttorney],
      courtActionPending:[pay.courtActionPending]
      
    });
  }
  onSubmit(){
    this.paymentForm.markAllAsTouched();
    console.log(this.paymentForm);
    if (this.paymentForm.valid){
      let payment:Payment;
      if(this.PaidForService.value=='No'){
         payment={
            paidForService:'No',
            paymentMethod:'',
            amountinDispute:0,
            description:'',
            contactedGovAgency:false,
            supportingDocs:this.selectedFile?.name,
            agencyContacted:'',
            agencyContactPerson:'',
            address:'',
            assistanceReceived:'',
            contactedAttorney:false,
            courtActionPending:false
          }
      }
      else{
        payment={
          paidForService:this.PaidForService.value,
          paymentMethod:this.PaymentMethod.value,
          amountinDispute:this.Amount.value,
          description:this.Description.value,
          contactedGovAgency:this.ContactedGov.value==true?true:false,
          supportingDocs:this.selectedFile?.name,
          agencyContacted:this.ContactedGov.value=="true"?this.AgencyContacted.value:'',
          agencyContactPerson:this.ContactedGov.value=="true"?this.AgencyContactPerson.value:'',
          address:this.ContactedGov.value=="true"?this.AgencyAddress.value:'',
          assistanceReceived:this.ContactedGov.value=="true"?this.AssistanceReceived.value:'',
          contactedAttorney:this.ContactedGov.value=="true"?this.ContactedAttorney.value:'',
          courtActionPending:this.ContactedGov.value=="true"?this.CourtActionPending.value:''
        }
      }
      
     
      this.service.setData('payment',payment);

      let complaint = this.service.getData('complaint');
      let complaintPaymentDto:complaintPayment={
      description : complaint.description,
      new_dateproblemfirstoccurred:complaint.dateOccured,
      new_brandnameormanufacturer:complaint.manufacturer,    
      new_datepurchased: complaint.purchaseDate, 
      new_dateyoucomplainedtocompany:complaint.datesComplained,
      new_serialnumber:complaint.serialNumber,  
      new_towhomyoucomplained:complaint.complaintFiler,  
      new_warrantyexpirationdate:complaint.expirationDate,  
      new_haveyoualreadypaidfortheproductorservice:payment.paidForService, 
       new_methodofpayment:payment.paymentMethod,
      new_descriptionoftheresolutionyouarerequestin:payment.description,  
      new_haveyoucontactedanyothergovtagencytoassis:payment.contactedGovAgency,
      new_amountindispute:payment.amountinDispute,
      customerid:'',
      primarycontactid:''
     }
     console.log(complaintPaymentDto);
     this.nextButtonClicked.emit();
    //  let options={"ContentType":"application/json"}
    //  this.service.post(' https://nysworkflowdemo.api.crm.dynamics.com/api/data/v9.2/incidents',complaintPaymentDto,options).subscribe({
    //    next:(res)=>{
    //      console.log ("res",res);
    //    },error:(err)=>{
    //      console.log("error",err);
    //    }
    //  });
     this.updateFormStepsByNumber.emit(4);

    }
    
  }
  onFileSelected(event:any){
    if(event.target.files.length>0){

      const file=event.target.files[0];
      this.selectedFile=file;
    }

   }
   onSaveExit(){
    this.paymentForm.markAllAsTouched();
    console.log(this.paymentForm);
    if (this.paymentForm.valid){
      let payment:Payment;
      if(this.PaidForService.value=='No'){
         payment={
            paidForService:'No',
            paymentMethod:'',
            amountinDispute:0,
            description:'',
            contactedGovAgency:false,
            supportingDocs:this.selectedFile?.name,
            agencyContacted:'',
            agencyContactPerson:'',
            address:'',
            assistanceReceived:'',
            contactedAttorney:false,
            courtActionPending:false
          }
      }
      else{
        payment={
          paidForService:this.PaidForService.value,
          paymentMethod:this.PaymentMethod.value,
          amountinDispute:this.Amount.value,
          description:this.Description.value,
          contactedGovAgency:this.ContactedGov.value,
          supportingDocs:this.selectedFile?.name,
          agencyContacted:this.ContactedGov.value=="true"?this.AgencyContacted.value:false,
          agencyContactPerson:this.ContactedGov.value=="true"?this.AgencyContactPerson.value:false,
          address:this.ContactedGov.value=="true"?this.AgencyAddress.value:false,
          assistanceReceived:this.ContactedGov.value=="true"?this.AssistanceReceived.value:false,
          contactedAttorney:this.ContactedGov.value=="true"?this.ContactedAttorney.value:false,
          courtActionPending:this.ContactedGov.value=="true"?this.CourtActionPending.value:false
        }
      }
      
     
      this.service.setData('payment',payment);

      let complaint = this.service.getData('complaint');
      let complaintPaymentDto:complaintPayment={
      description : complaint.description,
      new_dateproblemfirstoccurred:complaint.dateOccured,
      new_brandnameormanufacturer:complaint.manufacturer,    
      new_datepurchased: complaint.purchaseDate, 
      new_dateyoucomplainedtocompany:complaint.datesComplained,
      new_serialnumber:complaint.serialNumber,  
      new_towhomyoucomplained:complaint.complaintFiler,  
      new_warrantyexpirationdate:complaint.expirationDate,  
      new_haveyoualreadypaidfortheproductorservice:payment.paidForService, 
       new_methodofpayment:payment.paymentMethod,
      new_descriptionoftheresolutionyouarerequestin:payment.description,  
      new_haveyoucontactedanyothergovtagencytoassis:payment.contactedGovAgency,
      new_amountindispute:payment.amountinDispute,
      customerid:'',
      primarycontactid:''
     }
     console.log(complaintPaymentDto);
    //  let options={"ContentType":"application/json"}
    //  this.service.post(' https://nysworkflowdemo.api.crm.dynamics.com/api/data/v9.2/incidents',complaintPaymentDto,options).subscribe({
    //    next:(res)=>{
    //      console.log ("res",res);
    //    },error:(err)=>{
    //      console.log("error",err);
    //    }
    //  });
     
this.router.navigateByUrl('/my-complaints');
    }
  }
   get Description():FormControl{
    return this.paymentForm.get('description')as FormControl
  }
  get PaidForService():FormControl{
    return this.paymentForm.get('paidForService')as FormControl
  }
  get PaymentMethod():FormControl{
    return this.paymentForm.get('paymentMethod')as FormControl
  }
  get Amount():FormControl{
    return this.paymentForm.get('amountinDispute')as FormControl
  }
  get ContactedGov():FormControl{
    return this.paymentForm.get('contactedGovAgency')as FormControl
  }
  get AgencyContacted():FormControl{
    return this.paymentForm.get('agencyContacted')as FormControl
  }
  get AgencyAddress():FormControl{
    return this.paymentForm.get('address')as FormControl
  }
  get AgencyContactPerson():FormControl{
    return this.paymentForm.get('agencyContactPerson')as FormControl
  }
  get AssistanceReceived():FormControl{
    return this.paymentForm.get('assistanceReceived')as FormControl
  }
  get ContactedAttorney():FormControl{
    return this.paymentForm.get('contactedAttorney')as FormControl
  }
  get CourtActionPending():FormControl{
    return this.paymentForm.get('courtActionPending')as FormControl
  }
  
  


}
export interface Payment{
  paidForService:string,
  paymentMethod:string,
  amountinDispute:number,
  description:string,
  contactedGovAgency:boolean,
  supportingDocs:string
  agencyContacted:string,
      agencyContactPerson:string,
      address:string,
      assistanceReceived:string,
      contactedAttorney:boolean,
      courtActionPending:boolean
}