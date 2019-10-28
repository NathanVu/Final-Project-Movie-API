import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  api= 'b8943914d650ebb3ccccf7627a248989'
  baseUrl = 'https://api.themoviedb.org/3/'
  
  constructor(public http: HttpClient) {}

  getPopularMovies(){
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.api}&language=en-US&page=1`)
  }
}
