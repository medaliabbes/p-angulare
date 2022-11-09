import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../Models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  
  host = "http://192.168.101.11:8080/api/v1/review" ;
  constructor(private client :HttpClient) { }

  public getListOfReview(idMovie : any) : Observable<Review>
  {
    return this.client.get<Review>(this.host+'/' +idMovie) ;
  }
  
}
