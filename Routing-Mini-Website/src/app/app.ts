import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterLinkActive, RouterOutlet,About,Home,Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Routing-Mini-Website');
}
