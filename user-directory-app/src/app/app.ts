import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './users/users';
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Users,SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('user-directory-app');
}
