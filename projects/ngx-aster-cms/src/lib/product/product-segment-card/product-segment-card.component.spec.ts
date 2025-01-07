import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSegmentCardComponent } from './product-segment-card.component';

describe('ProductSegmentCardComponent', () => {
  let component: ProductSegmentCardComponent;
  let fixture: ComponentFixture<ProductSegmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSegmentCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSegmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
