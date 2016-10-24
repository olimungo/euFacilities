import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { Home } from './pages/home/home.component';
import { Users } from './pages/users/users.component';
import { Roles } from './pages/roles/roles.component';

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
    Roles
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }