import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2Component } from './ejercicio2.component';

describe('Ejercicio2Component', () => {
  let component: Ejercicio2Component;
  let fixture: ComponentFixture<Ejercicio2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ejercicio2Component]
    });
    fixture = TestBed.createComponent(Ejercicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
