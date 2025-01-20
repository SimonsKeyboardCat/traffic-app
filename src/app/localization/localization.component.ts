import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-localization',
  standalone: true,
  imports: [],
  templateUrl: './localization.component.html',
  styleUrl: './localization.component.scss',
})
export class LocalizationComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/buses']);
  }
}
