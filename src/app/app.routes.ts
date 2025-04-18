import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { AppDesignComponent } from './app-design/app-design.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';

export const routes: Routes = [
    { path: 'our-company', component: HomeComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'app-design', component: AppDesignComponent },
    { path: 'graphic-design', component: GraphicDesignComponent },
    { path: 'web-design', component: WebDesignComponent },
    { path: '**', redirectTo: 'our-company', pathMatch: 'full' } // Default route
  ];
