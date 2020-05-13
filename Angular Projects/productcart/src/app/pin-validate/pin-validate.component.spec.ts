import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinValidateComponent } from './pin-validate.component';

describe('PinValidateComponent', () => {
  let component: PinValidateComponent;
  let fixture: ComponentFixture<PinValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
