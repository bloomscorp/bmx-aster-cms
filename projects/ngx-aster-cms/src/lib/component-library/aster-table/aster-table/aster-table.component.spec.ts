import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsterTableComponent } from './aster-table.component';

describe('AsterTableComponent', () => {
  let component: AsterTableComponent;
  let fixture: ComponentFixture<AsterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsterTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
