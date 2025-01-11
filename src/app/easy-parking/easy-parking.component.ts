import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easy-parking',
  standalone: true,
  imports: [],
  templateUrl: './easy-parking.component.html',
  styleUrl: './easy-parking.component.scss',
})
export class EasyParkingComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/car']);
  }
}
