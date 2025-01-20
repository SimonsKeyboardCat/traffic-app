import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transit',
  standalone: true,
  imports: [],
  templateUrl: './transit.component.html',
  styleUrl: './transit.component.scss',
})
export class TransitComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/public-transport']);
  }

  goToRoutePlanning() {
    this.router.navigate(['/route-planning-bus']);
  }

  goToTickets() {
    this.router.navigate(['/tickets']);
  }
}
