import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { Buildings } from './pages/buildings/buildings.component';
import { Card } from './pages/buildings/card/card.component';
import { Detail } from './pages/buildings/detail/detail.component';
import { List } from './pages/buildings/list/list.component';
import { Map } from './pages/buildings/map/map.component';
import { SearchBox } from './pages/buildings/search-box/search-box.component';
import { ViewMode } from './pages/buildings/view-mode/view-mode.component';
import { Building } from './pages/buildings/detail//building/building.component';
import { Parking } from './pages/buildings/detail//parking/parking.component';
import { Bicycle } from './pages/buildings/detail//bicycle/bicycle.component';
import { Canteen } from './pages/buildings/detail//canteen/canteen.component';
import { Cafeteria } from './pages/buildings/detail//cafeteria/cafeteria.component';
import { FacilitiesViewMode } from './pages/buildings/detail//facilities-view-mode/facilities-view-mode.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDopxRQn9tQsmNJtgIDgF0pnZVIe7RYDwI",
  authDomain: "eufacilities-b12f4.firebaseapp.com",
  databaseURL: "https://eufacilities-b12f4.firebaseio.com",
  storageBucket: "eufacilities-b12f4.appspot.com",
  messagingSenderId: "253643200465"
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
    Buildings,
    Card,
    Detail,
    List,
    Map,
    SearchBox,
    ViewMode,
    Building,
    Parking,
    FacilitiesViewMode,
    Bicycle,
    Canteen,
    Cafeteria
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }