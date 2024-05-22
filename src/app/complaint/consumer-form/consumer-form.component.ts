import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { Router } from '@angular/router';
import { phonePattern, zipcodePattern,Phone_Mask } from '../../shared/utilities/utility';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrl: './consumer-form.component.scss'
})
export class ConsumerFormComponent implements OnInit {
  @ViewChild('form') consumerForms:NgForm
  phonepattern=phonePattern;
  
  zippattern=zipcodePattern;
  phoneMask=Phone_Mask;
  // consumerForm:FormGroup
  consumer:Consumer={
    title:'Mr.',
  firstName:'',
  lastName:'',
  streetAddress:'',
  city:'',
  state:'New York',
  zipcode:'',
  dayPhone:'',
  evePhone:'',
  fax:'',
  email:'',
  servedInMilitary:"No"
  }
  @Output() updateFormStepsByNumber=new EventEmitter<number>();
  @Output() toggleForm=new EventEmitter<boolean>();
  
  constructor(private fb :FormBuilder,private service:ComplaintService,private router:Router) {
    let consumerData=this.service.getData('consumer')
    if(consumerData){
      this.consumer=consumerData;
    }
  
    
  }
  ngOnInit(): void {
    this.getStates();
  }
  states:any

  titles = ['Mr.','Mrs.', 'Miss','Ms.','Dr.'];
  // createForm(){
  //   this.consumerForm = this.fb.group({
  //     title: [''],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     streetAddress: ['', Validators.required],
  //     city: ['', Validators.required],
  //     state: ['', Validators.required],
  //     zipcode: ['' ,[Validators.required/*,Validators.pattern('/^[0-9]{5}(?:-[0-9]{4})?$/gm')*/]],
  //     dayPhone: ['', [Validators.required/*,Validators.pattern('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm')*/]],
  //     evePhone: [''/*,Validators.pattern('/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm')*/],
  //     fax: [''],
  //     email: ['', [Validators.required, Validators.email]],
  //     servedInMilitary: [false,Validators.required]
  //   });
  // }
  
  getStates(){
    
    this.service.getJson("../../assets/data/states.json").subscribe((data) => {
      this.states = data;
    }, (error) => {
      console.log("error");
    });
  }
  onSubmit(){
    this.consumerForms.form.markAllAsTouched();
    if(this.consumerForms.valid){
      this.consumer.servedInMilitary=this.consumerForms.value.servedInMilitary;
 
    console.log(this.consumerForms);
    console.log(this.consumer);
   
    this.service.setData('consumer',this.consumer);
    let consumerdto:ConsumerDTO={
      parentcustomerid:'',
      salutation:this.consumer.title,
lastname: this.consumer.lastName,
firstname: this.consumer.firstName,
address1_line1 : this.consumer.streetAddress,
address1_city: this.consumer.city,
address1_stateorprovince:this.consumer.state,
address1_postalcode:this.consumer.zipcode,
address1_telephone1:this.consumer.dayPhone,
emailaddress1:this.consumer.email,
msdyn_isminorwithparentalconsent: this.consumer.servedInMilitary,
jobtitle:null
    }
    // let options={"ContentType":"application/json"}
    // this.service.post('https://nysworkflowdemo.api.crm.dynamics.com/api/data/v9.2/contacts',consumerdto,options).subscribe({
    //   next:(res)=>{
    //     console.log ("res",res);

    //   },error:(err)=>{
    //     console.log("error",err);
        
    //   }
    // })
    this.updateFormStepsByNumber.emit(1);
    
  }
 
  }
  onSaveExit(){
    this.consumerForms.form.markAllAsTouched();
    if(this.consumerForms.valid){
      this.consumer.servedInMilitary=this.consumerForms.value.servedInMilitary;
 
    console.log(this.consumerForms);
    console.log(this.consumer);
   
    this.service.setData('consumer',this.consumer);
    this.router.navigateByUrl('/my-complaints');

  }
  }

  

}
export interface Consumer{
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
export interface ConsumerDTO{
  parentcustomerid:string
  salutation:string
lastname: string
firstname: string
address1_line1 : string
address1_city: string
address1_stateorprovince:string
address1_postalcode:string
address1_telephone1:string
emailaddress1:string
msdyn_isminorwithparentalconsent: string
jobtitle: string|null

}
