import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookYourMarkPangoModule } from './book-your-mark-pango/book-your-mark-pango.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookYourMarkPangoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
