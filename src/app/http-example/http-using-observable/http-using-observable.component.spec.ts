import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUsingObservableComponent } from './http-using-observable.component';

describe('HttpUsingObservableComponent', () => {
  let component: HttpUsingObservableComponent;
  let fixture: ComponentFixture<HttpUsingObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpUsingObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpUsingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
