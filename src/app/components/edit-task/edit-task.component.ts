import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})


export class EditTaskComponent implements OnInit{

  taskId: any;
  task: any;

  constructor(private route: ActivatedRoute, public tasksService: TasksService, private router: Router){}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.tasksService.tasks[this.taskId];
      
  }
  editTask(){
    this.tasksService.editTask(this.taskId, this.task);
    this.router.navigate(['/']);
  }
}
