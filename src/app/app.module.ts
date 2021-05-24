import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
