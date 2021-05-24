import { Component, OnInit  } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  cities: any;
  isLoaded: boolean;
  constructor() {
    this.cities = ['Santiago', 'Zurich', 'Auckland', 'Sydney', 'Londres', 'Georgia'],
    this.isLoaded = false

  }

  ws = "ws://localhost:8000/ws"
  subject = webSocket(this.ws);
  messages: any = [];
  weathers: any = [];

  ngOnInit() {


    this.consulting()

  }

  consulting(){

    this.subject.subscribe(messages => {
      this.isLoaded = true
      this.messages = messages
      console.log(messages)
    } )
     


   }
}


