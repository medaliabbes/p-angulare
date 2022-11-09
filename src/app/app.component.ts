import { Component } from '@angular/core';
import { MovieComponent } from './movie/movie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    title = "w land" ;
    description = " a bad mouvies";
  
    movies = [
      {
        title : "WarCraft" ,
        description : "Orcs , Humans , Elves"
      } ,
      {
        title : "Doni Darko" ,
        description : "Ultimate universes , Imagination"
      }
    ]
}