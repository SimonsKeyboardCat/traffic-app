import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-sharing',
  standalone: true,
  imports: [],
  templateUrl: './car-sharing.component.html',
  styleUrl: './car-sharing.component.scss',
})
export class CarSharingComponent {
  constructor(private router: Router) {}

  goRoutePlanning() {
    this.router.navigate(['/route-planning']);
  }

  goBack() {
    this.router.navigate(['/car']);
  }
}
