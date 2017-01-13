import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';



import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';

import {routing} from './app.routing';
import { NgGridModule } from 'angular2-grid';
import { AgGridModule } from 'ag-grid-ng2/main';
import { UserMainComponent } from './components/userMain.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ,NgGridModule ,AgGridModule],
  declarations: [ AppComponent, UserComponent, UserMainComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
