import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomplaintComponent } from './mycomplaint.component';

describe('MycomplaintComponent', () => {
  let component: MycomplaintComponent;
  let fixture: ComponentFixture<MycomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MycomplaintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
