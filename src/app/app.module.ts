import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    CrisisListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
