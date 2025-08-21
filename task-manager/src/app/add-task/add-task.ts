import { Component } from '@angular/core';
import { Tasks } from '../service/tasks';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask {

  newTask = "";
  constructor(private data : Tasks){}
  addTask(){
    this.data.addTask(this.newTask);
    this.newTask="";
  }

}
