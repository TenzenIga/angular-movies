import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResponseMovies,  MovieDetail, ResponseVideo} from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'a49185c3d6e5d1d60ff96a51c62df35e';

 
  constructor(
    private http: HttpClient
  ) { }

  getMovies():Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
    return observableThrowError(error.message || "Server error");
  }
  getTopMovies():Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`)
    .pipe(catchError(this.errorHandler));
  }


  searchMovies(e:string):Observable<ResponseMovies>{
    return this.http.get<ResponseMovies>(` https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query=${e}&page=1&include_adult=false`)
    .pipe(catchError(this.errorHandler));
  }
 
  getMovieDetail(id:number):Observable<MovieDetail>{
    return this.http.get<MovieDetail>(` https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}&language=en-US`)
    .pipe(catchError(this.errorHandler));
  }
  
  getMovieTrailer(id:number):Observable<ResponseVideo>{
    return this.http.get<ResponseVideo>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.API_KEY}&language=en-US`)
    .pipe(catchError(this.errorHandler));
  }
}

