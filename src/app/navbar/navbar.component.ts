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

  menuItems = [
    { label: 'Our Company', link: '#' },
    { label: 'Locations', link: '#' },
    { label: 'Contact', link: '#' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
