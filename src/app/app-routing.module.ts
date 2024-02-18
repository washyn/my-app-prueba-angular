import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Ejercicio1Component} from "./pages/ejercicio1/ejercicio1.component";
import {Ejercicio3Component} from "./pages/ejercicio3/ejercicio3.component";
import {Ejercicio2Component} from "./pages/ejercicio2/ejercicio2.component";

const routes: Routes = [
  {
    path:'ejercicio1',
    component: Ejercicio1Component
  },
  {
    path:'ejercicio2',
    component: Ejercicio2Component
  },
  {
    path:'ejercicio3',
    component: Ejercicio3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
