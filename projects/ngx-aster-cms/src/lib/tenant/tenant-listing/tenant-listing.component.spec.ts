import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantListingComponent } from './tenant-listing.component';

describe('TenantListingComponent', () => {
  let component: TenantListingComponent;
  let fixture: ComponentFixture<TenantListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenantListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
