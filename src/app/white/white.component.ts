import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-white',
  templateUrl: './white.component.html',
  styleUrls: ['./white.component.css']
})
export class WhiteComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToParticipate() {
    this.router.navigate(['/Participate']);
  }

  navigateToEnd() {
    this.router.navigate(['/End']);
  }
        
}
