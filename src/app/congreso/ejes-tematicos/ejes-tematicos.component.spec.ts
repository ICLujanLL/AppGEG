import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjesTematicosComponent } from './ejes-tematicos.component';

describe('EjesTematicosComponent', () => {
  let component: EjesTematicosComponent;
  let fixture: ComponentFixture<EjesTematicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjesTematicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjesTematicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
