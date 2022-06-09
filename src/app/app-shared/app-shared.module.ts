import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule ,
    MaterialModule 
  ],
  imports: [
    MaterialModule
  ]
 
})
export class AppSharedModule { }
