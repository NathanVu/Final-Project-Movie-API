import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  

  constructor(public movieService: MovieService) { }

  ngOnInit() {

  }
  getPopularMovies(){
    return this.movieService.getPopularMovies();
  }
}
