import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { YearWiseComponent } from './year-wise/year-wise.component';
import { BookcardComponent } from './bookcard/bookcard.component';
import { ApiService } from './api.service';
import { InteractionService } from './interaction.service';
import { AppRoutingModule } from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import { rootReducer } from './store/reducers';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  AppRoutingModule,
  StoreModule.forRoot(rootReducer),
  ],
  declarations: [ AppComponent, HelloComponent ,
  ViewComponent,
  HomeComponent,
  YearWiseComponent,
  BookcardComponent
  
  ],
  bootstrap:    [ AppComponent ],
  providers:[
    ApiService,
    InteractionService
  ]
})
export class AppModule { }
