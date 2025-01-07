import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AsterFormInputSelectComponent} from './aster-form-input-select.component';

describe('AsterFormInputSelectComponent', () => {
  let component: AsterFormInputSelectComponent;
  let fixture: ComponentFixture<AsterFormInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsterFormInputSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsterFormInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
