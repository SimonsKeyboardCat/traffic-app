import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-availability',
  standalone: true,
  imports: [],
  templateUrl: './parking-availability.component.html',
  styleUrl: './parking-availability.component.scss',
})
export class ParkingAvailabilityComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/easy-parking']);
  }
}
