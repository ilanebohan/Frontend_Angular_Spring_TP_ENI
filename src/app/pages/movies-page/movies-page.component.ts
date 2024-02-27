import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { NgFor, NgForOf, NgIf } from '@angular/common';

export class Movie{
  public id:number | undefined;
  public title:string | undefined;

  //Constructor
  constructor(id:number, title:string){
    this.id = id;
    this.title = title;
  }
}

@Component({
  selector: 'app-movies-page',
  standalone: true,
  imports: [NgFor, NgForOf, NgIf],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})
export class MoviesPageComponent implements OnInit {


  public movies = [
    new Movie(1, "The Shawshank Redemption"),
    new Movie(2, "The Godfather"),
    new Movie(3, "The Dark Knight"),
    new Movie(4, "The Godfather: Part II")
  ];

  public isLoaded = false;
  constructor(private _httpClient: HttpClient){

  }
  ngOnInit(): void {
    this.getMovies();
    this.isLoaded=true;
  }
  
  getMovies(){
    // call "localhost:8080/movies"
    this._httpClient.get<Movie[]>("http://127.0.0.1:8080/api/v1/movies")
    .subscribe((data: any) => {
     this.movies.push(...data);
    });
  }
}
