import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilterPrivateDoctorsComponent } from './modal-filter-private-doctors.component';

describe('ModalFilterPrivateDoctorsComponent', () => {
  let component: ModalFilterPrivateDoctorsComponent;
  let fixture: ComponentFixture<ModalFilterPrivateDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFilterPrivateDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFilterPrivateDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
