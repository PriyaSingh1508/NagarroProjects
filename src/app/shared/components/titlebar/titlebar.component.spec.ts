import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { ToolbarComponent } from './titlebar.component';

describe('Toolbar - Component', () => {
  let fixture: ComponentFixture<ToolbarComponent>;
  let component;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [],
    });
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
  });

  it('should be created toolbar Component', () => {
    expect(component).toBeTruthy();
  });
});
