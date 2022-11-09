import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../Models/movie'
@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  host = "http://192.168.43.229:8080/api/v1/movie" ;
  constructor(private client :HttpClient ) {
    
  }

  public getAllMovies(): Observable<Movie[]>
  {
    return this.client.get<Movie[]>(this.host+"/all");
  }

  

  public addMovie(fd :FormData) : Observable<void>
  {
    return this.client.post<void>(this.host+'/add' ,fd);//fd);
  }

  public delete(id :any) : Observable <void> 
  {
    return this.client.delete<void>(this.host + '/' + id);
  }
  
  public getMovie(id: any ) : Observable<Movie>
  {
    return this.client.get<Movie>(this.host+'/'+id) ;
  }

}
