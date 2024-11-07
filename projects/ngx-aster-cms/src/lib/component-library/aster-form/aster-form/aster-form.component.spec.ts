import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AsterFormComponent} from './aster-form.component';

describe('AsterFormComponent', () => {
  let component: AsterFormComponent;
  let fixture: ComponentFixture<AsterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
