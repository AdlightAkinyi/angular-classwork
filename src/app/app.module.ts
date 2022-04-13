import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstIntroductionComponent } from './Introduction/first-introduction/first-introduction.component';
import { SecondComponentComponent } from './Introduction/second-component/second-component.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstIntroductionComponent,
    SecondComponentComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
