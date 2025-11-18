import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { LocationForecastComponent } from './location-forecast.component';

describe('LocationForecastComponent', () => {
  let component: LocationForecastComponent;
  let fixture: ComponentFixture<LocationForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationForecastComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
