import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss',
})
export class TicketsComponent {
  tickets: boolean = false;
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/transit']);
  }

  showTickets(type: string) {
    if (type == 'ulgowy') {
      this.tickets = false;
    } else if (type == 'normalny') {
      this.tickets = true;
    }
  }
}
