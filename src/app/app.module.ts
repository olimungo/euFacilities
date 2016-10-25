import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { Home } from './pages/home/home.component';
import { Users } from './pages/users/users.component';
import { LogIn } from './pages/log-in/log-in.component';
import { SignIn } from './pages/sign-in/sign-in.component';

import { Guardian } from './core/guardian/guardian.service';

export const firebaseConfig = {
  apiKey: "AIzaSyAEvFr-a3certr2Lq6hzgXtu1hC4so1em0",
  authDomain: "angular2-seed-32f06.firebaseapp.com",
  databaseURL: "https://angular2-seed-32f06.firebaseio.com",
  storageBucket: "angular2-seed-32f06.appspot.com",
  messagingSenderId: "922996335222"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing,
  ],
  declarations: [
    AppComponent,
    Home,
    Users,
    LogIn,
    SignIn
  ],
  providers: [
    appRoutingProviders,
    Guardian
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }