import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaSugerenciaComponent } from './alta-sugerencia.component';

describe('AltaSugerenciaComponent', () => {
  let component: AltaSugerenciaComponent;
  let fixture: ComponentFixture<AltaSugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaSugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
