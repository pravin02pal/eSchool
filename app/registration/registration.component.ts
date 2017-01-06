import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { Student }    from './student';

@Component({
  templateUrl: 'app/registration/registration.component.html'
})

export class RegistrationComponent implements OnInit {
  student: any;
  constructor(private registrationService: RegistrationService, private router: Router) {
    this.student = new Student();
  }

  submitRegistration() {
    alasql('INSERT INTO student SELECT * FROM ?',[[this.student]]);
  }
}
