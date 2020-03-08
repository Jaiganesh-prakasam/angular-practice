import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifNgforNgclassComponent } from './ngif-ngfor-ngclass.component';

describe('NgifNgforNgclassComponent', () => {
  let component: NgifNgforNgclassComponent;
  let fixture: ComponentFixture<NgifNgforNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifNgforNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifNgforNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
