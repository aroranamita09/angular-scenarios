import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bacha1Component } from './bacha1.component';

describe('Bacha1Component', () => {
  let component: Bacha1Component;
  let fixture: ComponentFixture<Bacha1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bacha1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bacha1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
