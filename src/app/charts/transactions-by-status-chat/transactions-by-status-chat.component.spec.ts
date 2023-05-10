import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsByStatusChatComponent } from './transactions-by-status-chat.component';

describe('TransactionsByStatusChatComponent', () => {
  let component: TransactionsByStatusChatComponent;
  let fixture: ComponentFixture<TransactionsByStatusChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsByStatusChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsByStatusChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
