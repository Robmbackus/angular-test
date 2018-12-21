import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CduComponent} from '../components/cdu/cdu.component';
import {Api} from "../providers/api";
import {HttpClientModule} from "@angular/common/http";
import {MatSelect, MatSelectModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
      AppComponent,
      CduComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatSelectModule
  ],
  providers: [
      Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
