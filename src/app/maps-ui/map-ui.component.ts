import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map-ui',
  templateUrl: './map-ui.component.html',
  //styleUrls: ['./map-ui.component.scss']
})


export class MapUiComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;


  constructor() {


   }

  ngOnInit() {
  }

}
