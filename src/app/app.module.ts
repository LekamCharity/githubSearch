import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirective } from './strikethrough.directive';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    StrikethroughDirective,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
