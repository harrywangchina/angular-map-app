import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-map-google',
  templateUrl: './map-google.component.html',
  styleUrls: ['./map-google.component.scss']
})
export class MapGoogleComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
