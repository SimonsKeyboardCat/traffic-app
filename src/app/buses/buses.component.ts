import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buses',
  standalone: true,
  imports: [],
  templateUrl: './buses.component.html',
  styleUrl: './buses.component.scss',
})
export class BusesComponent implements OnInit {
  public adress: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.adress = params['adress'];
    });
    console.log(this.adress);
  }

  goBack() {
    this.router.navigate(['/route-planning-bus']);
  }

  goToTickets() {
    this.router.navigate(['/tickets']);
  }

  goToLocalization() {
    this.router.navigate(['/localization']);
  }
}
