import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies:Movie[] = [];
  constructor(
    private apiService:ApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies():void {
    this.apiService.getMovies().subscribe(data =>{
      this.movies = data.results;
    });
  }
  
  onSelect(movie:Movie){
    this.router.navigate(['/movie', movie.id]);
  }
}
