import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManComponent } from './man/man.component';
import { BrainComponent } from './man/brain/brain.component';
import { HeartComponent } from './man/heart/heart.component';
import { FootComponent } from './man/foot/foot.component';
import { Page1Component } from './man/page1/page1.component';
import { Page2Component } from './man/page2/page2.component';


@NgModule({
  declarations: [
    AppComponent,
    ManComponent,
    BrainComponent,
    HeartComponent,
    FootComponent,
    Page1Component,
    Page2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
