import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesServiceService } from '../services/movies-service.service';
import { Movie } from '../Models/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  //mymovie! : Movie ;

  constructor(private service : MoviesServiceService) { 

  }
  onSubmit(form: NgForm) {
    //console.log('Your form data : ', form.value.title );
    let mymovie : Movie = form.value ;
    let fd:FormData = new FormData() ;

    //fd.append("movie" ,JSON.stringify(mymovie)) ;
    fd.append("title" , mymovie.title) ;
    fd.append("description" , mymovie.description) ;
    fd.append("base64file" , "NULL") ;
    console.log(JSON.stringify(mymovie)) ;
    console.log(fd) ;
    this.service.addMovie(fd).subscribe(() =>{
    }) ;
  }

  ngOnInit(): void {
  }

  
}
