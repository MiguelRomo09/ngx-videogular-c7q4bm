import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule } from 'ngx-videogular';

@NgModule({
  imports:      [ BrowserModule, FormsModule, VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
