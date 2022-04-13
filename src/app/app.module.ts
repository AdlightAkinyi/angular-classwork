import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstIntroductionComponent } from './Introduction/first-introduction/first-introduction.component';
import { SecondComponentComponent } from './Introduction/second-component/second-component.component';


import { ParentComponentComponent } from './Basics/component-data-binding/parent-component/parent-component.component';
import { ChildComponentComponent } from './Basics/component-data-binding/child-component/child-component.component';
import { InterpolationComponent } from './Basics/Data-binding/Interpolation/interpolation/interpolation.component';
import { PropertyBindingComponent } from './Basics/Data-binding/property-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './Basics/Data-binding/Event-binding/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './Basics/Data-binding/two-way-data-binding/two-way-data-binding/two-way-data-binding.component';





@NgModule({
  declarations: [
    AppComponent,
    FirstIntroductionComponent,
    SecondComponentComponent,
    
    
    ParentComponentComponent,
    ChildComponentComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
