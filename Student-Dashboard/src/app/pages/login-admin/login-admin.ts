import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatModule } from '../../appModules/mat-module';

@Component({
  selector: 'app-login-admin',
  imports: [FormsModule,MatModule],
  templateUrl: './login-admin.html',
  styleUrl: './login-admin.scss'
})
export class LoginAdmin {
    hide = true;
    password = '';
}
