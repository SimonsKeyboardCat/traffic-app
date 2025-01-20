import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-planning-bus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './route-planning-bus.component.html',
  styleUrl: './route-planning-bus.component.scss',
})
export class RoutePlanningBusComponent {
  public now: Date = new Date();
  public adress: string = '';

  constructor(private router: Router) {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  goBack() {
    this.router.navigate(['/transit']);
  }

  goBuses() {
    this.router.navigate(['/buses'], { queryParams: { adress: this.adress } });
  }
}
