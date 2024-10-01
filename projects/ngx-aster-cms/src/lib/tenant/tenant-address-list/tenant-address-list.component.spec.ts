import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TenantAddressListComponent} from './tenant-address-list.component';

describe('TenantAddressListComponent', () => {
  let component: TenantAddressListComponent;
  let fixture: ComponentFixture<TenantAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantAddressListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
