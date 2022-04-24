import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';

import { AlertComponent } from './alert/alert.component';
import { PouchDBComponent } from './pouch-db/pouch-db.component';
import { NewsComponent } from './news/news.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  declarations: [ 
    AppComponent,
    HelloComponent, 
    AlertComponent, 
    PouchDBComponent, 
    NewsComponent,
    DragDropComponent, 
  ],
  bootstrap:    [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
