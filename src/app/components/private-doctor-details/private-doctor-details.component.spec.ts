import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDoctorDetailsComponent } from './private-doctor-details.component';

describe('PrivateDoctorDetailsComponent', () => {
  let component: PrivateDoctorDetailsComponent;
  let fixture: ComponentFixture<PrivateDoctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDoctorDetailsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
