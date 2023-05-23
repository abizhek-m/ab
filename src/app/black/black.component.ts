import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-black',
  templateUrl: './black.component.html',
  styleUrls: ['./black.component.css']
})
export class BlackComponent implements OnInit {
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
