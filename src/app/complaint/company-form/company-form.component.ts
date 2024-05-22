import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { Router } from '@angular/router';
import { phonePattern, urlPattern, zipcodePattern ,Phone_Mask} from '../../shared/utilities/utility';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.scss'
})
export class CompanyFormComponent implements OnInit {
  phoneMask=Phone_Mask;
 

  companyForm:FormGroup
  @Output() updateFormStepsByNumberAndNoProgress=new EventEmitter<number>();
// urlPattern = /^(?:(http(s)?)?(sftp)?(ftp)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  
  
  companyDTO:CompanyDTO;
  @Output() updateFormStepsByNumber=new EventEmitter<number>();
  // companyInfo:CompanyInfo={
  //   company:'',
  //   representative:'',
  //   streetAddress:'',
  //   city:'',
  //   state:'',
  //   zipcode:'',
  //   companyPhone:'',
  //   website:''
  // }
  
  constructor(private fb :FormBuilder,private service:ComplaintService,private router:Router) {

  
   let companyData=this.service.getData('company')
   
   if(companyData){
     this.createForm1(companyData)
   }
   else{
    this.createForm();
   }
    
  }
  ngOnInit(): void {
    this.getStates();
   
    
  }
  states:any;
  createForm1(companyData:any){
    
    this.companyForm = this.fb.group({
      company: [companyData.company, Validators.required],
      representative: [companyData.representative, Validators.required],
      streetAddress: [companyData.streetAddress, Validators.required],
      city: [companyData.city, Validators.required],
      state: [companyData.state, Validators.required],
      zipcode: [companyData.zipcode, [Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern(zipcodePattern)]],
      companyPhone: [companyData.companyPhone, [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(phonePattern)]],
      website: [companyData.website, [Validators.required,Validators.pattern(urlPattern)]],
    });
  }
  createForm(){
    
    this.companyForm = this.fb.group({
      company: ['', Validators.required],
      representative: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern(zipcodePattern)]],
      companyPhone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(phonePattern)]],
      website: ['', [Validators.required,Validators.pattern(urlPattern)]],
    });
  }
  getStates(){
    
    this.service.getJson("../../assets/data/states.json").subscribe((data) => {
      this.states = data;
    }, (error) => {
      console.log("error");
    });
  }
  
  onSubmit2(){
    
   
    this.companyForm.markAllAsTouched();
    if(this.companyForm.valid){
      let companyInfo:CompanyInfo={
        company:this.Company.value,
        representative:this.Representative.value,
        streetAddress:this.StreetAddress.value,
        city:this.City.value,
        state:this.State.value,
        zipcode:this.Zipcode.value,
        companyPhone:this.CompanyPhone.value,
        website:this.Website.value
      }
      
    console.log(companyInfo);
    console.log(this.companyForm);
    this.companyDTO={
      name: this.Company.value,
      address1_name:this.Representative.value,
      address1_line1:this.StreetAddress.value,
      address1_city:this.City.value,
      address1_stateorprovince:this.State.value,
      address1_postalcode:this.Zipcode.value,
      telephone1:this.CompanyPhone.value,
      websiteurl:this.Website.value
    }
   

    // let options={"ContentType":"application/json"}
    // this.service.post('https://nysworkflowdemo.api.crm.dynamics.com/api/data/v9.2/accounts',this.companyDTO,options).subscribe({
    //   next:(res)=>{
    //     console.log ("res",res);
     
    //   },error:(err)=>{
    //     console.log("error",err);
    //   }
    // })
    this.service.setData('company',companyInfo);
    this.updateFormStepsByNumber.emit(2);
  }

  }
  onSaveExit(){
    this.companyForm.markAllAsTouched();
    if(this.companyForm.valid){
      let companyInfo:CompanyInfo={
        company:this.Company.value,
        representative:this.Representative.value,
        streetAddress:this.StreetAddress.value,
        city:this.City.value,
        state:this.State.value,
        zipcode:this.Zipcode.value,
        companyPhone:this.CompanyPhone.value,
        website:this.Website.value
      }
      
    console.log(companyInfo);
    console.log(this.companyForm);
    this.companyDTO={
      name: this.Company.value,
      address1_name:this.Representative.value,
      address1_line1:this.StreetAddress.value,
      address1_city:this.City.value,
      address1_stateorprovince:this.State.value,
      address1_postalcode:this.Zipcode.value,
      telephone1:this.CompanyPhone.value,
      websiteurl:this.Website.value
    }
   

    // let options={"ContentType":"application/json"}
    // this.service.post('https://nysworkflowdemo.api.crm.dynamics.com/api/data/v9.2/accounts',this.companyDTO,options).subscribe({
    //   next:(res)=>{
    //     console.log ("res",res);
     
    //   },error:(err)=>{
    //     console.log("error",err);
    //   }
    // })
    this.service.setData('company',companyInfo);
    this.router.navigateByUrl('/my-complaints');
  }
  }

  get Company():FormControl{
    return this.companyForm.get('company')as FormControl
  }
  get Representative():FormControl{
    return this.companyForm.get('representative')as FormControl
  }
  get StreetAddress():FormControl{
    return this.companyForm.get('streetAddress')as FormControl
  }
  get City():FormControl{
    return this.companyForm.get('city')as FormControl
  }
  get Zipcode():FormControl{
    return this.companyForm.get('zipcode')as FormControl
  }
  get State():FormControl{
    return this.companyForm.get('state')as FormControl
  }
  get CompanyPhone():FormControl{
    return this.companyForm.get('companyPhone')as FormControl
  }
  get Website():FormControl{
    return this.companyForm.get('website')as FormControl
  }

}
export interface CompanyInfo{
  company:string,
  representative:string,
  streetAddress:string,
  city:string,
  state:string,
  zipcode:string,
  companyPhone:string,
  website:string
}
interface CompanyDTO{
name: string,
address1_name:string,
address1_line1:string,
address1_city:string,
address1_stateorprovince:string,
address1_postalcode:string,
telephone1:string,
websiteurl:string
}