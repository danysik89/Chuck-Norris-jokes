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
  randJokes = [1];
  categories = [];

  obj = {explicit: true, nerdy: true}


  constructor(private http: Http, private jokesService: JokesService) { }

  refresh(i) {
    if (i >=1 && i <= 10) {
      this.i = +i;
      this.randJokes.length = this.i;
      this.jokesService.getRandomJokes(i, this.categories).subscribe(randJokes => {
        this.randJokes = randJokes.value;      
      })
    }    
  }  

  checkExp(){
    if (this.obj.explicit == true) {
      this.jokesService.getCategories().subscribe(categories => {
        this.categories.unshift('explicit');  
        //console.log(this.categories);     
        this.jokesService.getRandomJokes(this.i, this.categories).subscribe(randJokes => {
          this.randJokes = randJokes.value;      
        })     
      });   
    } else if (this.obj.explicit == false) {
      this.jokesService.getCategories().subscribe(categories => {
        this.categories.shift();
        //console.log(this.categories);     
        this.jokesService.getRandomJokes(this.i, this.categories).subscribe(randJokes => {
          this.randJokes = randJokes.value;      
        })     
      });   
    }   
  }

  checkNerdy () {
    if (this.obj.nerdy == true) {
      this.jokesService.getCategories().subscribe(categories => {
        this.categories.push('nerdy');  
        //console.log(this.categories);     
        this.jokesService.getRandomJokes(this.i, this.categories).subscribe(randJokes => {
          this.randJokes = randJokes.value;      
        })     
      });   
    } else if (this.obj.nerdy == false) {
      this.jokesService.getCategories().subscribe(categories => {
        this.categories.pop();  
        //console.log(this.categories);     
        this.jokesService.getRandomJokes(this.i, this.categories).subscribe(randJokes => {
          this.randJokes = randJokes.value;      
        })     
      });   
    }    
  }

  ngOnInit() {
    this.jokesService.getCategories().subscribe(categories => {
      this.categories = categories.value;  
      //console.log(this.categories);     
      this.jokesService.getRandomJokes(1, this.categories).subscribe(randJokes => {
        this.randJokes = randJokes.value;      
      })     
    });   

  }


}
