import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComplaintFormComponent } from './file-complaint-form.component';

describe('FileComplaintFormComponent', () => {
  let component: FileComplaintFormComponent;
  let fixture: ComponentFixture<FileComplaintFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileComplaintFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileComplaintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
