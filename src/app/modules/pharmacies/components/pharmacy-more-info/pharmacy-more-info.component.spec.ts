import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyMoreInfoComponent } from './pharmacy-more-info.component';

describe('PharmacyMoreInfoComponent', () => {
  let component: PharmacyMoreInfoComponent;
  let fixture: ComponentFixture<PharmacyMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyMoreInfoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
