import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueesgegComponent } from './queesgeg.component';

describe('QueesgegComponent', () => {
  let component: QueesgegComponent;
  let fixture: ComponentFixture<QueesgegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueesgegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueesgegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
