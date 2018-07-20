import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRecordComponent } from './message-record.component';

describe('MessageRecordComponent', () => {
  let component: MessageRecordComponent;
  let fixture: ComponentFixture<MessageRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
