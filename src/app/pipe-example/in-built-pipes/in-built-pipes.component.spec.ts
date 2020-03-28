import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBuiltPipesComponent } from './in-built-pipes.component';

describe('InBuiltPipesComponent', () => {
  let component: InBuiltPipesComponent;
  let fixture: ComponentFixture<InBuiltPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBuiltPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBuiltPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
