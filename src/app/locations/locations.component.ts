import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-locations',
  //imports: [MapComponent],
  imports: [],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  // selectedLocation = {
  //   latitude: 45.4215,
  //   longitude: -75.6972,
  //   name: 'Canada, Ottawa'
  // };
}
