import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicMoreInfoComponent } from './clinic-more-info.component';

describe('ClinicMoreInfoComponent', () => {
  let component: ClinicMoreInfoComponent;
  let fixture: ComponentFixture<ClinicMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicMoreInfoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
