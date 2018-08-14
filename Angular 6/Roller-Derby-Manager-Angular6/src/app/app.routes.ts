import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' },
 // { path: 'accueil', component: IndexComponent },
 //{ path: 'equipes', component: IndexComponent },
 //{ path: 'offre', component: IndexComponent },
 //{ path: 'aide et contact', component: IndexComponent },

];
