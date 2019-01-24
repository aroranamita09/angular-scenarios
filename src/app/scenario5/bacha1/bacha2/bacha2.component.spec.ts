import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bacha2Component } from './bacha2.component';

describe('Bacha2Component', () => {
  let component: Bacha2Component;
  let fixture: ComponentFixture<Bacha2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bacha2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bacha2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
