import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/home/home.module'
  },
  {
    path: 'signup',
    loadChildren: 'app/registration/registration.module'
  },
  {
    path: '**',
    redirectTo: ''
  }
]; 

export const routing = RouterModule.forRoot(appRoutes);
