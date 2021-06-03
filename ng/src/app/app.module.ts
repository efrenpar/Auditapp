import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Fase1Component } from './components/formFase1/formFase1.component';
import {NavSelection} from './components/navs/nav-selection.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DynamicInputs } from './components/dinamycInputs/dynamicInputs.component';



@NgModule({
  declarations: [
    AppComponent,
    Fase1Component,
    NavSelection,
    DynamicInputs 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
