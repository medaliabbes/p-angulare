import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})


export class MovieComponent implements OnInit {

  @Input() title: any;
  @Input() description : any;
  
  
  constructor() {
   
   }
  

  
  ngOnInit(): void {
  }

}
