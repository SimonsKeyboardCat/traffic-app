import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-transport',
  standalone: true,
  imports: [],
  templateUrl: './public-transport.component.html',
  styleUrl: './public-transport.component.scss',
})
export class PublicTransportComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }

  goDescription() {
    this.router.navigate(['/public-transport-description']);
  }

  goTrains() {
    this.router.navigate(['/trains']);
  }

  goTransit() {
    this.router.navigate(['/transit']);
  }
}
