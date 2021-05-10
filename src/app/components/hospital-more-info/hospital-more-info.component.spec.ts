import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalMoreInfoComponent } from './hospital-more-info.component';

describe('HospitalMoreInfoComponent', () => {
  let component: HospitalMoreInfoComponent;
  let fixture: ComponentFixture<HospitalMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalMoreInfoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
