

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    ShortenPipe,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
