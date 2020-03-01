import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeContainerComponent } from './joke-container.component';

describe('JokeContainerComponent', () => {
  let component: JokeContainerComponent;
  let fixture: ComponentFixture<JokeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
