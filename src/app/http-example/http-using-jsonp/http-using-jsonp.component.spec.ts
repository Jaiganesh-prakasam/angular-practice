import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUsingJsonpComponent } from './http-using-jsonp.component';

describe('HttpUsingJsonpComponent', () => {
  let component: HttpUsingJsonpComponent;
  let fixture: ComponentFixture<HttpUsingJsonpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpUsingJsonpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpUsingJsonpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
