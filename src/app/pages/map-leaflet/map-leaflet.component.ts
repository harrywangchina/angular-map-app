import { Component, OnInit, NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, LatLng, tileLayer, circle, polygon } from 'leaflet';

@NgModule({
  imports: [LeafletModule],
  exports: [LeafletModule]
})

@Component({
  selector: 'app-map-leaflet',
  templateUrl: './map-leaflet.component.html',
  styleUrls: ['./map-leaflet.component.scss']
})
export class MapLeafletComponent implements OnInit {
  options: Object;
  layersControl: Object;
  constructor() { 
  }

  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 15,
      center: latLng(39.920126, 116.403703)
    };
  }

}
