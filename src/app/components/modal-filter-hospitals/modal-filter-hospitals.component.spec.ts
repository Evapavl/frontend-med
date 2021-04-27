import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilterHospitalsComponent } from './modal-filter-hospitals.component';

describe('ModalFilterHospitalsComponent', () => {
  let component: ModalFilterHospitalsComponent;
  let fixture: ComponentFixture<ModalFilterHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFilterHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFilterHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
