import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTask } from './add-task/add-task';
import { ShowTask } from './show-task/show-task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AddTask,ShowTask],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task-manager');
}
