import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusByDateChartComponent } from './status-by-date-chart.component';

describe('StatusByDateChartComponent', () => {
  let component: StatusByDateChartComponent;
  let fixture: ComponentFixture<StatusByDateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusByDateChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusByDateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
