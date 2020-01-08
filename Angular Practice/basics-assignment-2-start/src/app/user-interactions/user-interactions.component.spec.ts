import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractionsComponent } from './user-interactions.component';

describe('UserInteractionsComponent', () => {
  let component: UserInteractionsComponent;
  let fixture: ComponentFixture<UserInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
