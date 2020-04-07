import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUsingPromiseComponent } from './http-using-promise.component';

describe('HttpUsingPromiseComponent', () => {
  let component: HttpUsingPromiseComponent;
  let fixture: ComponentFixture<HttpUsingPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpUsingPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpUsingPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
