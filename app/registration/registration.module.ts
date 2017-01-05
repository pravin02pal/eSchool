import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RegistrationComponent } from './registration.component';
import { RegistrationService } from './registration.service';

export const routerConfig = [{
  path: '',
  component: RegistrationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routerConfig), CommonModule],
  declarations: [
      RegistrationComponent
    ],
  providers: [
      RegistrationService
    ],
  exports: [
      RegistrationComponent
    ]
})

export default class RegistrationModule {}