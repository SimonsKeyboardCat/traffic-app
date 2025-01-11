import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-transport-description',
  standalone: true,
  imports: [],
  templateUrl: './public-transport-description.component.html',
  styleUrl: './public-transport-description.component.scss',
})
export class PublicTransportDescriptionComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/public-transport']);
  }
}
