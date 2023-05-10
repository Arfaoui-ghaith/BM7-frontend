import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountByStatusChartComponent } from './amount-by-status-chart.component';

describe('AmountByStatusChartComponent', () => {
  let component: AmountByStatusChartComponent;
  let fixture: ComponentFixture<AmountByStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountByStatusChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountByStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
