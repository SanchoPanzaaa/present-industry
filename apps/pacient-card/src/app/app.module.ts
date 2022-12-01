import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardCoreModule } from '@present-industry/card-core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CardCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
