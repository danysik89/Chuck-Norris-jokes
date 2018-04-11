import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  i = 1;
  joke = {};
  randJokes = Array(this.i);

  

  constructor(private http: Http, private jokesService: JokesService) { }

  refresh(i) {
    //i = i + 1;
    //window.location.reload();
    if (i >=1 && i <= 10) {
      this.i = +i;
      this.randJokes.length = i;
      console.log(this.randJokes.length);
      this.jokesService.getRandomJokes().subscribe(randJokes => {
        this.joke = randJokes;      
      })
    }    
  }

  ngOnInit() {
    this.jokesService.getRandomJokes().subscribe(randJokes => {
      this.joke = randJokes;      
    })
  }

}
