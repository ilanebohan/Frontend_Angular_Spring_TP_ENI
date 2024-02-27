import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-details',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.scss'
})
export class MoviesDetailsComponent {

  public isLoaded = false;
  public movie : any;


  
}
