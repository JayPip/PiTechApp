
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputUrlDataComponent } from './components/input-url-data/input-url-data.component';
import { TaskWindowComponent } from './components/task-window/task-window.component';
const routes: Routes = [
  {
  path: 'qrgenerate',
  component: InputUrlDataComponent
  },
  {
    path: 'tasks',
    component: TaskWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
