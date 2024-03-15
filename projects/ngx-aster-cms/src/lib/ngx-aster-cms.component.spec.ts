import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAsterCmsComponent } from './ngx-aster-cms.component';

describe('NgxAsterCmsComponent', () => {
  let component: NgxAsterCmsComponent;
  let fixture: ComponentFixture<NgxAsterCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxAsterCmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxAsterCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
