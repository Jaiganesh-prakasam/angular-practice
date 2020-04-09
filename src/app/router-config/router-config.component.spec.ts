import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterConfigComponent } from './router-config.component';

describe('RouterConfigComponent', () => {
  let component: RouterConfigComponent;
  let fixture: ComponentFixture<RouterConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
