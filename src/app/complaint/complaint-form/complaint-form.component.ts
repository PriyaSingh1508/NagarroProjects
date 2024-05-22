import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrl: './complaint-form.component.scss'
})
export class ComplaintFormComponent implements OnInit {
  selectedFile:File;
  
  todayDate=new Date().toISOString().split('T')[0];
  
 
  @Output() updateFormStepsByNumber=new EventEmitter<number>();
  @Output() updateFormStepsByNumberAndNoProgress=new EventEmitter<number>();
  complaintForm:FormGroup;
  
  
  constructor(private fb :FormBuilder,private service:ComplaintService,private router:Router) {
let complaint=this.service.getData('complaint');
if(complaint){
   this.createForm1(complaint);}else{
    this.createForm();
   }
    
  }
  ngOnInit(): void {
    
    
  }
 

  
  createForm(){
    this.complaintForm = this.fb.group({
      description: ['', Validators.required],
      dateOccured: ['', Validators.required],
      complaintFiler: ['', Validators.required],
      manufacturer: ['', Validators.required],
      serialNumber: ['', Validators.required],
      expirationDate: ['', [Validators.required]],
      purchaseDate: ['', [Validators.required]],
      supportingDocs: [null],
      datesComplained:this.fb.array([this.createDateFormGroup()])
    });
    
  }
  createForm1(comp:any){
    

    this.complaintForm = this.fb.group({
      description: [comp.description, Validators.required],
      dateOccured: [comp.dateOccured, Validators.required],
      complaintFiler: [comp.complaintFiler, Validators.required],
      manufacturer: [comp.manufacturer, Validators.required],
      serialNumber: [comp.serialNumber, Validators.required],
      expirationDate: [comp.expirationDate, [Validators.required]],
      purchaseDate: [comp.purchaseDate, [Validators.required]],
      supportingDocs: [comp.supportingDocs],
      datesComplained:this.fb.array(comp.datesComplained.map((x: string)=>this.createDateFormGroup1(x)))
    });}
  onSubmit(){
    this.complaintForm.markAllAsTouched();
    console.log(this.complaintForm);
    if(this.complaintForm.valid){
      let dates:any[]=[];
      (this.complaintForm.get('datesComplained')as FormArray).controls.forEach(item=>dates.push(item.get("date")!.value));

     let complaint:Complaint={
      description:this.Description.value,
      dateOccured:this.DateOccured.value,
      datesComplained:dates,
      complaintFiler:this.ComplaintFiler.value,
      manufacturer:this.Manufacturer.value,
      serialNumber:this.SerialNumber.value,
      purchaseDate:this.PurchaseDate.value,
      expirationDate:this.ExpirationDate.value,
      supportingDocs:this.selectedFile?.name
      }
     
    console.log(this.complaintForm);
    // this.complaint.supportingDocs=this.selectedFile.name;
    // this.complaint.datesComplained = new Array(this.complaintDates.length)
    // .map((v, index) => this.complaintDates.at(index) as FormGroup);
    this.service.setData('complaint',complaint);

    
    
   
    this.updateFormStepsByNumber.emit(3);
  
  }
  }
  onSaveExit(){
    this.complaintForm.markAllAsTouched();
    if(this.complaintForm.valid){
      let dates:any[]=[];
      (this.complaintForm.get('datesComplained')as FormArray).controls.forEach(item=>dates.push(item.get("date")!.value));

     let complaint:Complaint={
      description:this.Description.value,
      dateOccured:this.DateOccured.value,
      datesComplained:dates,
      complaintFiler:this.ComplaintFiler.value,
      manufacturer:this.Manufacturer.value,
      serialNumber:this.SerialNumber.value,
      purchaseDate:this.PurchaseDate.value,
      expirationDate:this.ExpirationDate.value,
      supportingDocs:this.selectedFile?.name
      }
     
    console.log(this.complaintForm);
    // this.complaint.supportingDocs=this.selectedFile.name;
    // this.complaint.datesComplained = new Array(this.complaintDates.length)
    // .map((v, index) => this.complaintDates.at(index) as FormGroup);
    this.service.setData('complaint',complaint);
    this.router.navigateByUrl('/my-complaints');

    
    
   
   
  
  }
  }
  createDateFormGroup(): FormGroup {
    return this.fb.group({
      date: ['', Validators.required]
    });
  }
  createDateFormGroup1(date:string): FormGroup {
    return this.fb.group({
      date: [date, Validators.required]
    });
  }
 
  get complaintDates(){
    return (this.complaintForm.get('datesComplained') as FormArray).controls;
  }
  addDate(): void {
    (this.complaintForm.get('datesComplained') as FormArray).push(this.createDateFormGroup());
  }
 

  removeDate(index: number): void {
    const control=<FormArray>this.complaintForm.controls['datesComplained'];
    control.removeAt(index);
  }
  onFileSelected(event:any){
    if(event.target.files.length>0){

      const file=event.target.files[0];
      this.selectedFile=file;
    }

   }
   get Description():FormControl{
    return this.complaintForm.get('description')as FormControl
  }
  get DateOccured():FormControl{
    return this.complaintForm.get('dateOccured')as FormControl
  }
  get ComplaintFiler():FormControl{
    return this.complaintForm.get('complaintFiler')as FormControl
  }
  get Manufacturer():FormControl{
    return this.complaintForm.get('manufacturer')as FormControl
  }
  get SerialNumber():FormControl{
    return this.complaintForm.get('serialNumber')as FormControl
  }
  get PurchaseDate():FormControl{
    return this.complaintForm.get('purchaseDate')as FormControl
  }
  get ExpirationDate():FormControl{
    return this.complaintForm.get('expirationDate')as FormControl
  }
  get Website():FormControl{
    return this.complaintForm.get('website')as FormControl
  }


}
export interface Complaint{
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
