import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "add-task", component: AddTaskComponent},
    {path: "edit-task/:id", component: EditTaskComponent}
];
