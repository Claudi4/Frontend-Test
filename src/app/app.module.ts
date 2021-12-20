import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
//import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
//import { SearchPipe } from './pipes/search.pipe';
//import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    //SearchPipe,
    //SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
