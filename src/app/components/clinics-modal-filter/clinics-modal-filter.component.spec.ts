import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsModalFilterComponent } from './clinics-modal-filter.component';

describe('ClinicsModalFilterComponent', () => {
  let component: ClinicsModalFilterComponent;
  let fixture: ComponentFixture<ClinicsModalFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicsModalFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsModalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
