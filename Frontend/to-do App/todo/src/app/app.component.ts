import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item!:string;
  list:string[]=['Namkeen', 'Biscuits', 'Pulses'];
  title = 'todo';

  public addItem(){
    if(this.item){
      this.list.push(this.item);
    }
  }
  public deleteItem(de:string){
    console.log(de);
    this.list.splice(this.list.indexOf(de),1);
  }
}
