import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSugerenciaComponent } from './item-sugerencia.component';

describe('ItemSugerenciaComponent', () => {
  let component: ItemSugerenciaComponent;
  let fixture: ComponentFixture<ItemSugerenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSugerenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSugerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
