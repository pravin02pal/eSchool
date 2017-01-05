import { Component } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: 'app/registration/registration.component.html'
})

export class RegistrationComponent {
  constructor(private registrationService: RegistrationService, private router: Router) {}

  ngOnInit() {
    
  }
}
