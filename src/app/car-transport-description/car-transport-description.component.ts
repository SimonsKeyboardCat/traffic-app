import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-transport-description',
  standalone: true,
  imports: [],
  templateUrl: './car-transport-description.component.html',
  styleUrl: './car-transport-description.component.scss',
})
export class CarTransportDescriptionComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/car']);
  }
}
