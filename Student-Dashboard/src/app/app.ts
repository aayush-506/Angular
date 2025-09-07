import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginStudent } from './pages/login-student/login-student';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginStudent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Student-Dashboard');
}
