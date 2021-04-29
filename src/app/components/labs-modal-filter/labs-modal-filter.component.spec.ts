import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsModalFilterComponent } from './labs-modal-filter.component';

describe('LabsModalFilterComponent', () => {
  let component: LabsModalFilterComponent;
  let fixture: ComponentFixture<LabsModalFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabsModalFilterComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsModalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
