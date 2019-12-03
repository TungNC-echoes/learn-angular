import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {WordComponent} from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
