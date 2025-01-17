import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AsterFormInputNumericComponent} from './aster-form-input-numeric.component';

describe('AsterFormInputNumericComponent', () => {
  let component: AsterFormInputNumericComponent;
  let fixture: ComponentFixture<AsterFormInputNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsterFormInputNumericComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsterFormInputNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
