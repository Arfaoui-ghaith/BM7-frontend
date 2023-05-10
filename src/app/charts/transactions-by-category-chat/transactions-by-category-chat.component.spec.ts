import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsByCategoryChatComponent } from './transactions-by-category-chat.component';

describe('TransactionsByCategoryChatComponent', () => {
  let component: TransactionsByCategoryChatComponent;
  let fixture: ComponentFixture<TransactionsByCategoryChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsByCategoryChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsByCategoryChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
