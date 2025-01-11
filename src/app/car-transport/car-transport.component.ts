import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-transport',
  standalone: true,
  imports: [],
  templateUrl: './car-transport.component.html',
  styleUrl: './car-transport.component.scss',
})
export class CarTransportComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

  goDescription() {
    this.router.navigate(['/car-description']);
  }

  goEasyParking() {
    this.router.navigate(['/easy-parking']);
  }

  goCarSharing() {
    this.router.navigate(['/car-sharing']);
  }
}
