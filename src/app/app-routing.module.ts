import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path: 'movie/:id', component: MoviePageComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
