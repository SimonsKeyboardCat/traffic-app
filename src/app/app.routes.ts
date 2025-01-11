import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarTransportComponent } from './car-transport/car-transport.component';
import { PublicTransportComponent } from './public-transport/public-transport.component';
import { CarSharingComponent } from './car-sharing/car-sharing.component';
import { EasyParkingComponent } from './easy-parking/easy-parking.component';
import { CarTransportDescriptionComponent } from './car-transport-description/car-transport-description.component';
import { PublicTransportDescriptionComponent } from './public-transport-description/public-transport-description.component';
import { TransitComponent } from './transit/transit.component';
import { TrainsComponent } from './trains/trains.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'car',
    component: CarTransportComponent,
  },
  {
    path: 'car-description',
    component: CarTransportDescriptionComponent,
  },
  {
    path: 'car-sharing',
    component: CarSharingComponent,
  },
  {
    path: 'easy-parking',
    component: EasyParkingComponent,
  },
  {
    path: 'public-transport',
    component: PublicTransportComponent,
  },
  {
    path: 'public-transport-description',
    component: PublicTransportDescriptionComponent,
  },
  {
    path: 'transit',
    component: TransitComponent,
  },
  {
    path: 'trains',
    component: TrainsComponent,
  },
];
