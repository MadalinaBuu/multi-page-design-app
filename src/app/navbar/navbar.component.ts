import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavBarComponent {
  isMenuOpen = false;

  constructor() {}
  
  menuItems = [
    { label: 'Our Company', link: '/our-company' },
    { label: 'Locations', link: '/locations' },
    { label: 'Contact', link: '/contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
