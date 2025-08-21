import { Component } from '@angular/core';
import { Task, Tasks } from '../service/tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-task',
  imports: [CommonModule],
  templateUrl: './show-task.html',
  styleUrl: './show-task.scss'
})
export class ShowTask {

items : Task[] = [];
constructor(private data:Tasks){}

ngOnInit(){
  this.items = this.data.getTask();
}

}
