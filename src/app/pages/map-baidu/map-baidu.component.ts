import { Component, OnInit } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map'

@Component({
  selector: 'app-map-baidu',
  templateUrl: './map-baidu.component.html',
  styleUrls: ['./map-baidu.component.scss']
})
export class MapBaiduComponent implements OnInit {

  options: MapOptions;

  constructor() {
    this.options = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      },
      enableKeyboard: true
    }
  }

  ngOnInit() {
  }

}
