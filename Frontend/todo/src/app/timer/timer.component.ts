import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
