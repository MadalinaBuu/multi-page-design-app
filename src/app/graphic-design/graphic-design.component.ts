import { Component } from '@angular/core';
import { PortfolioSectionComponent } from '../shared/portfolio-section/portfolio-section.component';
import { ServicesSectionComponent } from '../shared/services-section/services-section.component';

@Component({
  selector: 'app-graphic-design',
  imports: [PortfolioSectionComponent, ServicesSectionComponent],
  templateUrl: './graphic-design.component.html',
  styleUrl: './graphic-design.component.scss'
})
export class GraphicDesignComponent {
  cards = [
    { 
      title: "TIM BROWN", 
      description: "A book cover designed for Tim Brown’s new release, ‘Change’", 
      image: "../../assets/images/graphic-design/desktop/image-change.jpg" 
    },
    { 
      title: "BOXED WATER", 
      description: "A simple packaging concept made for Boxed Water", 
      image: "../../assets/images/graphic-design/desktop/image-boxed-water.jpg" 
    },
    { 
      title: "SCIENCE!", 
      description: "A poster made in collaboration with the Federal Art Project", 
      image: "../../assets/images/graphic-design/desktop/image-science.jpg" 
    }
  ];

  services = [
    {
      name: "Web Design",
      link: "/web-design",
      images: {
        desktop: "../../assets/images/home/desktop/image-web-design-large.jpg",
        tablet: "../../assets/images/home/tablet/image-web-design.jpg",
        mobile: "../../assets/images/home/mobile/image-web-design.jpg",
      },
    },
    {
      name: "App Design",
      link: "/app-design",
      images: {
        desktop: "../../assets/images/home/desktop/image-app-design.jpg",
        tablet: "../../assets/images/home/tablet/image-app-design.jpg",
        mobile: "../../assets/images/home/mobile/image-app-design.jpg",
      },
    }
  ];
}
