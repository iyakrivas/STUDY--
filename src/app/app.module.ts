import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManComponent } from './man/man.component';
import { BrainComponent } from './man/brain/brain.component';
import { HeartComponent } from './man/heart/heart.component';
import { FootComponent } from './man/foot/foot.component';


@NgModule({
  declarations: [
    AppComponent,
    ManComponent,
    BrainComponent,
    HeartComponent,
    FootComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
