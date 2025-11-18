import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { DaysForecastComponent } from './days-forecast.component';

describe('DaysForecastComponent', () => {
  let component: DaysForecastComponent;
  let fixture: ComponentFixture<DaysForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaysForecastComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
