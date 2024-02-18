import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { Ejercicio1Component } from './pages/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './pages/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './pages/ejercicio3/ejercicio3.component';
import { RandomDogComponent } from './components/random-dog/random-dog.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    RandomDogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
