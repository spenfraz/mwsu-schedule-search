import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { SectionsComponent } from './components/sections/sections.component';

import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ AppComponent, SectionsComponent,
				  NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
