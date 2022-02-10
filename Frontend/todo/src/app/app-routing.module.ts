import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsArrayComponent } from './forms-array/forms-array.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component'; 
import { RouteGuardsDemoComponent } from './route-guards-demo/route-guards-demo.component';

const routes: Routes = [
  {path:"timer", component:TimerComponent},
  {path:'todo',component:ToDoListComponent},
  {path:'formsarray', component:FormsArrayComponent},
  {path:'customDirectives', component:CustomDirectivesComponent},
  {path:'routeGuards', component:RouteGuardsDemoComponent},
  {path:'', pathMatch:'full', component:TimerComponent},
  {path:'**', pathMatch:'full', component:TimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
