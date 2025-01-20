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
import { AddPassengersComponent } from './add-passengers/add-passengers.component';
import { ParkingAvailabilityComponent } from './parking-availability/parking-availability.component';
import { RoutePlanningComponent } from './route-planning/route-planning.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RoutePlanningBusComponent } from './route-planning-bus/route-planning-bus.component';
import { BusesComponent } from './buses/buses.component';
import { LocalizationComponent } from './localization/localization.component';

export const routes: Routes = [
  {
    path: 'home',
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
  {
    path: 'add-passengers',
    component: AddPassengersComponent,
  },
  {
    path: 'parking-availability',
    component: ParkingAvailabilityComponent,
  },
  {
    path: 'route-planning',
    component: RoutePlanningComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'route-planning-bus',
    component: RoutePlanningBusComponent,
  },
  {
    path: 'buses',
    component: BusesComponent,
  },
  {
    path: 'localization',
    component: LocalizationComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
  },
];
