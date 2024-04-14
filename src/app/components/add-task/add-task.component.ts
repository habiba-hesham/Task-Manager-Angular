import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit{

  constructor(private tasksService: TasksService, private router: Router){}

  ngOnInit(): void {
      
  }

  addTask(title: any, description: any, due_date: any){
    this.tasksService.addTask(title.value, description.value, due_date.value);
    title.value = ''; 
    description.value = '';
    due_date.value = '';
    this.router.navigate(['/'])
 }

}
