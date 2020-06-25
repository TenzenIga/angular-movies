import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
  
    MoviePageComponent,
  
    MoviesListComponent,
  
    TopMoviesComponent,
  
    FooterComponent,
  
    SearchComponent,
  
    PageNotFoundComponent,
  
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
