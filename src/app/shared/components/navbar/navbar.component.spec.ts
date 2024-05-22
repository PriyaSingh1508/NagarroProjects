import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { NavbarComponent } from './navbar.component';

describe('Navbar - Component', () => {
    let fixture: ComponentFixture<NavbarComponent>;
    let component;
   beforeEach(()=> {
     TestBed.configureTestingModule({
        imports : [AppModule],
        declarations: []
     })
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

    it('should be created navbar Component', () => {
      expect(component).toBeTruthy();
  });
});
