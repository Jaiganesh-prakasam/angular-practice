import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeExampleComponent } from './async-pipe-example.component';

describe('AsyncPipeExampleComponent', () => {
  let component: AsyncPipeExampleComponent;
  let fixture: ComponentFixture<AsyncPipeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
