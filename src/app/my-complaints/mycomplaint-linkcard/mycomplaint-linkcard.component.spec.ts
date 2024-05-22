import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomplaintLinkcardComponent } from './mycomplaint-linkcard.component';

describe('MycomplaintLinkcardComponent', () => {
  let component: MycomplaintLinkcardComponent;
  let fixture: ComponentFixture<MycomplaintLinkcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MycomplaintLinkcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycomplaintLinkcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
