import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsByStatusAndCategoriesChartComponent } from './transactions-by-status-and-categories-chart.component';

describe('TransactionsByStatusAndCategoriesChartComponent', () => {
  let component: TransactionsByStatusAndCategoriesChartComponent;
  let fixture: ComponentFixture<TransactionsByStatusAndCategoriesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsByStatusAndCategoriesChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsByStatusAndCategoriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
