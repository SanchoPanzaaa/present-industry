import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardCoreModule } from '@present-industry/card-core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardCoreModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
