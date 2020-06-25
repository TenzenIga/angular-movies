import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Movie } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {
  movies:Movie[] = []
  constructor(
    private apiService:ApiService,
    private router:Router
    ) { }

  ngOnInit(){
    this.getMovies();  
  }


  getMovies():void{
    this.apiService.getTopMovies().subscribe(data =>{
      this.movies = data.results;
    });
  }

  onSelect(movie:Movie){
    this.router.navigate(['/movie', movie.id]);
  }
}
