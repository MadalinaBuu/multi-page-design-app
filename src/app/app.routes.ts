import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'our-company', component: HomeComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'our-company', pathMatch: 'full' } // Default route
  ];
