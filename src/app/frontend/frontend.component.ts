import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';


import { AgmCoreModule } from '@agm/core';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

//carousel



@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
//  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
 public searchControl: FormControl;
 lat: number;
 lng: number;
 zoom: number;

 constructor(
     private mapsAPILoader: MapsAPILoader,
     private ngZone: NgZone
   ) {}

 @ViewChild("search")
 public searchElementRef: ElementRef;

ngOnInit() {
  this.searchControl = new FormControl();
  this.setCurrentPosition();

  this.mapsAPILoader.load().then(() => {

    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ["address"],


    });

    // Bias the SearchBox results towards current map's viewport.
  autocomplete.addListener('bounds_changed', function() {
    this.searchElementRef.nativeElement.setBounds(autocomplete.getBounds());
  });

  // Bias the SearchBox results towards current map's viewport.
autocomplete.addListener('bounds_changed', function() {
  this.searchElementRef.nativeElement.setBounds(autocomplete.getBounds());
});



    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        //set latitude, longitude and zoom
        this.lat = place.geometry.location.lat();
        this.lng = place.geometry.location.lng();
         this.zoom = 17;
      });
    });

  });


}
private setCurrentPosition() {
  /// set user's location
  if ("geolocation" in navigator) {
 navigator.geolocation.getCurrentPosition((position) => {
   this.lat = position.coords.latitude;
   this.lng = position.coords.longitude;
   this.zoom = 12;
 });
}
}


}
