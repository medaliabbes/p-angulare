import { Component, OnInit } from '@angular/core';
import { Review } from '../Models/review';
import { ReviewServiceService } from '../services/review-service.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private service : ReviewServiceService) { }

  testMovieR!: Review;
  testMovieRtrue! : Review  ;
  
  ngOnInit(): void {
    this.service.getListOfReview(1).subscribe(data =>{
      this.testMovieR = data ;
      this.testMovieRtrue = this.testMovieR ;
    });
  }

}
