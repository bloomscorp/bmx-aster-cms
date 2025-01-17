import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AsterFormInputTextComponent} from './aster-form-input-text.component';

describe('AsterFormInputTextComponent', () => {
  let component: AsterFormInputTextComponent;
  let fixture: ComponentFixture<AsterFormInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsterFormInputTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsterFormInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
