import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent }  from './app.component';
import { AboutComponent }  from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { GameLobbyComponent } from './gamelobby/gamelobby.component';

@NgModule({
  imports:[
     BrowserModule,
     FormsModule,
     HttpModule,
      routes
  ],
  declarations: [
     AppComponent,
     AboutComponent,
     LoginComponent,
     SignUpComponent,
     GameLobbyComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
