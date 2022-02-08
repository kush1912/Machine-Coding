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

  Orignaltime = new Date("12 Feb 2022 00:00:00").getTime();
  // console.log(Orignaltime);
  countDown!:string;
  time = setInterval(()=>{
    let currTime = new Date().getTime();
    let interval =  this.Orignaltime-currTime ;
    let days = Math.floor(interval/(1000*60*60*24));
    let hrs = Math.floor((interval%(1000*60*60*24))/(1000*60*60));
    let min = Math.floor((interval%(1000*60*60))/(1000*60));
    let sec = Math.floor((interval%(1000*60))/1000);
    this.countDown = `${days} Days ${hrs} hrs ${min} Min ${sec} Sec`;
    if (interval<0) {
      clearInterval(this.time);
      this.countDown="Expired!";
    }
  },1000)



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
