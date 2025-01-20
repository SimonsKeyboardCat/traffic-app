import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-passengers',
  standalone: true,
  imports: [],
  templateUrl: './add-passengers.component.html',
  styleUrl: './add-passengers.component.scss',
})
export class AddPassengersComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/route-planning']);
  }
}
