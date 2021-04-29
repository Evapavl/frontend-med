import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapClinicsComponent } from './map-clinics.component';

describe('MapClinicsComponent', () => {
  let component: MapClinicsComponent;
  let fixture: ComponentFixture<MapClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapClinicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
