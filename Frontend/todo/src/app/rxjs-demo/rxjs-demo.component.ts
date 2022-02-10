import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    const person:any = {
      name:'david'
    };

  }

}

/*
 of: used for converting objects/strings/any datatype into Observables.
 from: used for converting promise into Observable


 
forkJoin is an operator that takes any number of input observables which can be passed either as an array or a dictionary of input observables. If no input observables are provided (e.g. an empty array is passed), then the resulting stream will complete immediately.

forkJoin will wait for all passed observables to emit and complete and then it will emit an array or an object with last values from corresponding observables.

Types of Operators:
  - Pipable
  - creational

of(1,2,3).pipe(map(x)=>x*X)).subscribe((v)=>console.log(v));

 Observables can be created with new Observable. Most commonly, observables are created using creation functions, like of, from, interval, etc.



 */