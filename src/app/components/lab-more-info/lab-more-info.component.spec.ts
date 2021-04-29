import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMoreInfoComponent } from './lab-more-info.component';

describe('LabMoreInfoComponent', () => {
  let component: LabMoreInfoComponent;
  let fixture: ComponentFixture<LabMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabMoreInfoComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
