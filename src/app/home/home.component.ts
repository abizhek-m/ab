import { Component,HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @HostBinding('@fadeInOut') get fadeInOut() {
    return true;
}
constructor(private router: Router) {}

ngOnInit() {
  setInterval(() => {
    switch (this.router.url) {
      case '/Hire':
        this.router.navigateByUrl('/Black');
        break;
      case '/Black':
        this.router.navigateByUrl('/White');
        break;
      case '/White':
        this.router.navigateByUrl('/Hire');
        break;
      default:
        this.router.navigateByUrl('/Hire');
    }
  }, 3000);
}
}
