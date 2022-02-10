import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item!:string;
  list:string[]=['Namkeen', 'Biscuits', 'Pulses'];

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
