import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeObservableComponent } from './pipe-observable.component';

describe('PipeObservableComponent', () => {
  let component: PipeObservableComponent;
  let fixture: ComponentFixture<PipeObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
