import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trains',
  standalone: true,
  imports: [],
  templateUrl: './trains.component.html',
  styleUrl: './trains.component.scss',
})
export class TrainsComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/public-transport']);
  }
}
