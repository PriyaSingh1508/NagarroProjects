import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { FooterComponent } from './footer.component';

describe('Footer - Component', () => {
    let fixture: ComponentFixture<FooterComponent>;
    let component;
   beforeEach(()=> {
     TestBed.configureTestingModule({
        imports : [AppModule],
        declarations: []
     })
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

    it('should be created footer Component', () => {
      expect(component).toBeTruthy();
  });
});
