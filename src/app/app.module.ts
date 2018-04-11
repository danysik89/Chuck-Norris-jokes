import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { JokesService } from './jokes.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RandomComponent } from './random/random.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: ':random-jokes', component: RandomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
