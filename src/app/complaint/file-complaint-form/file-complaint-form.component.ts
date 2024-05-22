import { Component, ViewChild } from '@angular/core';
import { ReviewAndSubmitComponent } from '../review-and-submit/review-and-submit.component';

@Component({
  selector: 'app-file-complaint-form',
  templateUrl: './file-complaint-form.component.html',
  styleUrl: './file-complaint-form.component.scss'
})
export class FileComplaintFormComponent {
  formStepsNum = 0;
  progressSteps: NodeListOf<Element>;
  formSteps: NodeListOf<Element>;
  visitedStep:number=0;
  @ViewChild('reviewAndSubmit') reviewAndSubmit: ReviewAndSubmitComponent;
  formVisitedSteps: Set<number> = new Set<number>();
  filecomplaintLeftPanelTitle:string="Want to File A Complaint ?"
  filecomplaintLeftPanelDescription:string="It is important that you attempt to resolve your complaint with the company before filling with the Division of Consumer Protection (DCP).Complaints already the subject of lawsuit or other legal action cannot be handled by the DCP."
  changeToForm:boolean=false;
  leftPanelData:any[]=[
    {
      title:"LET’S UNDERSTAND YOUR ISSUE!",
      description:"Please be sure that your statement is complete and factual, but as brief as possible. The DCP will attempt to help you and the company reach a satisfactory settlement. However, we cannot require the company to make an adjustment.",
    },
    {
      title:"ADD COMPANY DETAILS!",
      description:"Please be sure that your statement is complete and factual, but as brief as possible. The DCP will attempt to help you and the company reach a satisfactory settlement. However, we cannot require the company to make an adjustment.",
    },
    {
      title:"LET'S FILE THE COMPLAINT",
      description:"Please be sure that your statement is complete and factual, but as brief as possible. The DCP will attempt to help you and the company reach a satisfactory settlement. However, we cannot require the company to make an adjustment.",
    },
    {
      title:"ADD PAYMENT PROOFS!",
      description:"For “complaint description” please include dates of the observation or purchase, and any information you may have to demonstrate that the same goods were being sold for a different price previously by the same seller or for a lesser price by other merchants in the same area."
    },
    {
      title:"PRINT A COPY FOR YOUR RECORDS!",
      description:"If you have supporting documentation regarding your complaint such as contracts, warranties, bills received, canceled checks, correspondence, etc., please mail or fax copies of these documents as well as a copy of the completed Consumer Complaint Form to the address at the bottom of this screen. DO NOT SEND ORIGINALS. "+"\n \n"+" New York State Department of State Division of Consumer Protection Consumer Assistance Unit 99 Washington Avenue Albany, New York 12231-0001 Fax: 518-486-3936",
    }
  ]
  leftPanelTitle:string=this.filecomplaintLeftPanelTitle;
  leftPanelDescription:string=this.filecomplaintLeftPanelDescription;
  constructor(){
   this.formVisitedSteps.add(0);
  }

  onNextButtonClick() {
    this.reviewAndSubmit.getDetails();
  }
  ngOnInit(): void {
    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress = document.getElementById("progress");
    this.formSteps = document.querySelectorAll(".form-step");
    this.progressSteps = document.querySelectorAll(".progress-step");

  }
 
  // updateFormSteps(): void {
  //   this.formSteps.forEach((formStep: Element) => {
  //     formStep.classList.contains("form-step-active") &&
  //       formStep.classList.remove("form-step-active");
  //   });
  //   console.log(this.formStepsNum);
  //   this.leftPanelTitle=this.leftPanelData[this.formStepsNum].title;
  //   this.leftPanelDescription=this.leftPanelData[this.formStepsNum].description;
  //   this.formSteps[this.formStepsNum].classList.add("form-step-active");
  // }

  toggleForm(toggle:boolean):void{
    if(toggle==true)
    {
      this.leftPanelTitle= this.leftPanelData[0].title;
      this.leftPanelDescription= this.leftPanelData[0].description;
      this.changeToForm=true;
      
    }
    else{
      this.leftPanelTitle= this.filecomplaintLeftPanelTitle;
      this.leftPanelDescription= this.filecomplaintLeftPanelDescription;
      this.changeToForm=false;
    }
  }
  updateFormStepsByNumber(id:number):void{
    this.formStepsNum=id;
    this.visitedStep=id;
    this.formSteps.forEach((formStep: Element) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });

    this.leftPanelTitle=this.leftPanelData[this.formStepsNum].title;
    this.leftPanelDescription=this.leftPanelData[this.formStepsNum].description;
    this.formSteps[id].classList.add("form-step-active");
    this.updateProgressbar();
  }

  updateFormStepsByNumberAndNoProgress(id:number):void{
    this.formStepsNum=id;
    
    
    this.formSteps.forEach((formStep: Element) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
    this.leftPanelTitle=this.leftPanelData[this.formStepsNum].title;
    this.leftPanelDescription=this.leftPanelData[this.formStepsNum].description;
    this.formSteps[id].classList.add("form-step-active");
  }

  updateProgressbar(): void {
    this.progressSteps.forEach((progressStep: Element, idx: number) => {
      if (idx < this.formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
        
      } else {
        progressStep.classList.remove("progress-step-active");
      }
      if(this.formVisitedSteps.has(idx)||idx<this.formStepsNum)
      {
        this.formVisitedSteps.add(idx);
        
        progressStep.classList.add("progress-step-completed");
        if (!progressStep.querySelector('.completed-step')) {
          const iElement = document.createElement('i');
          iElement.className = 'bx bx-check completed-step';
          iElement.style.position = 'absolute';
          iElement.style.top = '-0.25rem';
          iElement.style.marginLeft = '1.25rem';
          iElement.style.backgroundColor = '#05AC56';
          iElement.style.color = '#fff';
          iElement.style.borderRadius = '50%';
          iElement.style.border = '1px solid #fff';
          progressStep.appendChild(iElement);
        }
        
      } 
      else {
        progressStep.classList.remove("progress-step-completed");
        if(idx==1)
        {
          const progresss=document.getElementById("progress")
          if(progresss)
          {
            progresss.style.width="0";
          }
        }
        const iElement = progressStep.querySelector('.completed-step');
        if (iElement) {
          progressStep.removeChild(iElement);
        }
      }
    });
  
    const progressCompleted = document.querySelectorAll(".progress-step-completed");
    const progress = document.getElementById("progress");
    
    if (progress) { 
     if(progressCompleted.length==1 ){
        progress.style.width="12.5%";
      }
      else
      {
        progress.style.width =((((progressCompleted.length - 1) / (this.progressSteps.length - 1)) * 100)+12.5) + "%";
      }
    }
  }

  navigateToStep(stepIndex: number): void {
    
    if (stepIndex <= this.visitedStep) {
      this.formStepsNum = stepIndex;
      this.updateFormStepsByNumberAndNoProgress(this.formStepsNum);
    }
  }
}
