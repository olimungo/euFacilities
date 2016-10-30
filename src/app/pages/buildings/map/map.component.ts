import { Component, Input } from '@angular/core';

import { IBuilding } from '../../../core/entities/building/building.interface';

declare var google: any;
declare var InfoBox: any;

@Component({
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: [ 'map.component.css' ]
})
export class Map {
  @Input() set buildings(value: IBuilding[]) {
    this._buildings = value;
    this.deleteMarkers();

    setTimeout(() => {
      this.updateMarkers();
    }, 1000);
  }

  private _buildings: IBuilding[];
  private markers: any = [];
  private infoboxes: any = [];
  private map: any;

  ngOnInit() {
    let berl = { lat: 50.8435894, lng: 4.3823954 };

    let mapOptions = {
      center: berl,
      zoom: 16,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER
      },
      zoomControl: true,
      scaleControl: true,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);    
  }

  private updateMarkers() {
    if (this._buildings) {
      this._buildings.map((building: IBuilding) => {
        if (building.buildingAddress.gpsCoordinates) {
          let position = { lat: building.buildingAddress.gpsCoordinates.latitude, lng: building.buildingAddress.gpsCoordinates.longitude };
          
          this.addMarker(position);
          this.addBox(position, building.code);
        }
      });
    }
  }  

  addMarker(location: any) {
    var marker = new google.maps.Marker({
      position: location,
      map: this.map
    });

    this.markers.push(marker);
  }

  deleteMarkers() {
    this.markers.map((marker: any) => marker.setMap(null));
    this.infoboxes.map((infobox: any) => infobox.open(null));

    this.markers = [];
    this.infoboxes = [];
  }

  addBox(position: any, label: string) {
    let options = {
      content: label,
      boxStyle: {
        border: '1px solid rgba(98, 141, 185, .5)',
        textAlign: 'center',
        fontSize: '1em',
        color: 'white',
        padding: '.5em',
        'border-radius': '2px',
        backgroundColor: 'rgba(111, 160, 210, .5)',
      },
      disableAutoPan: true,
      pixelOffset: new google.maps.Size(-25, 0),
      position: new google.maps.LatLng(position.lat, position.lng),
      closeBoxURL: '',
      isHidden: false,
      pane: 'mapPane',
      enableEventPropagation: true
    };

    let infobox = new InfoBox(options);
    infobox.open(this.map);

    this.infoboxes.push(infobox);
  }
}