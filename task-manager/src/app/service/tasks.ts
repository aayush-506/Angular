import { Injectable } from '@angular/core';

export interface Task {
  id : number ,
  task : string 
}
@Injectable({
  providedIn: 'root'
})


export class Tasks {
  

taskList : Task[] = [];

getTask(){
   return this.taskList;
}

addTask(task:string) : void{
  this.taskList.push({id:this.taskList.length+1 , task})
}

removeTask(id:number) : void{
  this.taskList = this.taskList.filter(e=>e.id != id);
}

}
