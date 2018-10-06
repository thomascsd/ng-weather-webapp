import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentForecastComponent } from './current-forecast.component';

describe('CurrentForecastComponent', () => {
  let component: CurrentForecastComponent;
  let fixture: ComponentFixture<CurrentForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
