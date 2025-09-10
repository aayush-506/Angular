import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';


const modules = [
  MatFormFieldModule,
   MatInputModule,
   MatIconModule,
   MatButtonModule,
   MatSidenavModule,
   MatListModule,
   MatToolbarModule
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
