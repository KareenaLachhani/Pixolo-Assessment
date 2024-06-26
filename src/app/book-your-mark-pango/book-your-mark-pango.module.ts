import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PangoBookListComponent } from './pango-book-list/pango-book-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PangoBookListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    PangoBookListComponent
  ]
})
export class BookYourMarkPangoModule { }
