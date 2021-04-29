import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLabsComponent } from './map-labs.component';

describe('MapLabsComponent', () => {
  let component: MapLabsComponent;
  let fixture: ComponentFixture<MapLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
