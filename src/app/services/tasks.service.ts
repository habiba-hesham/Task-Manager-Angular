import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService{

  tasks: Task[] = [
    
  ]

  constructor() {

    let storedTasks = localStorage.getItem('tasks');
    if(storedTasks){
      this.tasks = JSON.parse(storedTasks);
    }
    else{
      this.tasks = [];
    }

   }
  
  

  deleteTask(i: number){
    this.tasks.splice(i, 1);
    this.storeTasks();
  }

  addTask(title: any, description: any, due_date: any){
    this.tasks.push({
      title,
      description,
      due_date,
      isChecked: false
    })
    this.storeTasks();
  }
  editTask(id: any, task: any){
    this.tasks[id] = task;
    this.storeTasks();
  }

  saveState(isChecked: any, id:any) {
    this.tasks[id].isChecked = isChecked;
    this.storeTasks();
  }

  storeTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
