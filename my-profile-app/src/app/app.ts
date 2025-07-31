import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyInfoCard } from './my-info-card/my-info-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyInfoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-profile-app');
}
