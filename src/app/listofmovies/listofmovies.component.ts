import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MoviesServiceService } from '../services/movies-service.service';

@Component({
  selector: 'app-listofmovies',
  templateUrl: './listofmovies.component.html',
  styleUrls: ['./listofmovies.component.css']
})
export class ListofmoviesComponent implements OnInit {

  constructor(private service : MoviesServiceService) { }

  mylistOfMovies! : Movie[];
  ngOnInit(): void {
    this.service.getAllMovies().subscribe(data =>{
      this.mylistOfMovies = data ;
    });
  }

}
