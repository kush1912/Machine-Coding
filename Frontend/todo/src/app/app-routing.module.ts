import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {path:"", component:TimerComponent},
  {path:'todo',component:ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
