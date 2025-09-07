import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatFormFieldModule,
   MatInputModule,
   MatIconModule,
   MatButtonModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule , modules
  ],
  exports:[
    modules
  ],
})
export class MatModule { }
