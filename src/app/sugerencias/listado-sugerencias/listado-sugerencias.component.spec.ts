import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSugerenciasComponent } from './listado-sugerencias.component';

describe('ListadoSugerenciasComponent', () => {
  let component: ListadoSugerenciasComponent;
  let fixture: ComponentFixture<ListadoSugerenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSugerenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
