import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(public tasksService: TasksService){}

  ngOnInit(): void {
      
  }
  deleteTask(i: number){
    this.tasksService.deleteTask(i);
  }
  saveState(isChecked: any, id:any) {
    this.tasksService.saveState(isChecked, id);
  }
}
