import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';



@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html'
})
export class FrontendComponent implements OnInit {

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
  this.setCurrentPosition();

  this.mapsAPILoader.load().then(() => {

    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ["address"],
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
