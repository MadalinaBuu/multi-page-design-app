import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-section',
  imports: [RouterModule, CommonModule],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {

  @Input() services: any[] = [];
  @Input() currentPage: string = ''; // ex: 'web-design'

  
}
