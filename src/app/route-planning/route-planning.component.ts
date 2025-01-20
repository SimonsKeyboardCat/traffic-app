import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-planning',
  standalone: true,
  imports: [],
  templateUrl: './route-planning.component.html',
  styleUrl: './route-planning.component.scss',
})
export class RoutePlanningComponent {
  public now: Date = new Date();

  constructor(private router: Router) {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  goBack() {
    this.router.navigate(['/car-sharing']);
  }

  goToAddPassengers() {
    this.router.navigate(['/add-passengers']);
  }
}
