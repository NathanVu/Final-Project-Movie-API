import { ApiService } from './api.service';
import { logging } from 'protractor';
import { Injectable } from '@angular/core';



export interface Movies {
  results: Movie[]
}
export interface Movie {
  title: string; 
  poster_path: string;
  vote_average: string; 
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  data: Movie[]

  constructor(public apiService: ApiService) { }




  getPopularMovies() {
    this.apiService.getPopularMovies()
    .subscribe((res:Movies) => {
      this.data = res.results

    console.log('movies',this.data)
    })
  }
}