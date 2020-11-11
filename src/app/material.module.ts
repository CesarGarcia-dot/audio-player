import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
// src/app/material.module.ts
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

//variables of module
const modules = [
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule
];


@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule { }
