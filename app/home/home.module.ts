import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

export const routerConfig = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routerConfig), CommonModule],
  declarations: [
      HomeComponent
    ],
  providers: [
      HomeService
    ],
  exports: [
      HomeComponent
    ]
})

export default class HomeModule {}