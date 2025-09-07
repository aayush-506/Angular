import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatModule } from '../../appModules/mat-module';


@Component({
  selector: 'app-login-student',
  imports: [FormsModule,MatModule],
  templateUrl: './login-student.html',
  styleUrl: './login-student.scss'
})
export class LoginStudent {
  hide = true;
  password = '';
}
