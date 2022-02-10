import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TimerComponent } from './timer/timer.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { RouteGuardsDemoComponent } from './route-guards-demo/route-guards-demo.component';
import { FormsArrayComponent } from './forms-array/forms-array.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TimerComponent,
    ToDoListComponent,
    RouteGuardsDemoComponent,
    FormsArrayComponent,
    CustomDirectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
