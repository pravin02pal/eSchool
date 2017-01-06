import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit {
  students: any;
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit() {
    this.students = this.homeService.getData();
  }
}
