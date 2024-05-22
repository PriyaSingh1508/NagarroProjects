import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomplaintInfoCardComponent } from './mycomplaint-info-card.component';

describe('MycomplaintInfoCardComponent', () => {
  let component: MycomplaintInfoCardComponent;
  let fixture: ComponentFixture<MycomplaintInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MycomplaintInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycomplaintInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
