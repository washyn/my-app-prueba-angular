import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css'],
})
export class Ejercicio3Component implements OnInit {
  formGroup: FormGroup = {} as FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const regex = /^[a-z]+$/i;
    this.formGroup = this.formBuilder.group({
      userName: ['', [Validators.pattern(regex)]],
    });
  }
}
