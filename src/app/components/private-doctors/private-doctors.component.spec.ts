import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDoctorsComponent } from './private-doctors.component';

describe('PrivateDoctorsComponent', () => {
  let component: PrivateDoctorsComponent;
  let fixture: ComponentFixture<PrivateDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDoctorsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
