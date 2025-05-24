import { Component } from '@angular/core';
import { PortfolioSectionComponent } from '../shared/portfolio-section/portfolio-section.component';
import { ServicesSectionComponent } from '../shared/services-section/services-section.component';

@Component({
  selector: 'app-app-design',
  imports: [PortfolioSectionComponent, ServicesSectionComponent],
  templateUrl: './app-design.component.html',
  styleUrl: './app-design.component.scss'
})
export class AppDesignComponent {
  cards = [
    { 
      title: "AIRFILTER", 
      description: "Solving the problem of poor indoor air quality by filtering the air", 
      image: "../../assets/images/app-design/desktop/image-airfilter.jpg" 
    },
    { 
      title: "EYECAM", 
      description: "Product that lets you edit your favorite photos and videos at any time", 
      image: "../../assets/images/app-design/desktop/image-eyecam.jpg" 
    },
    { 
      title: "FACEIT", 
      description: "Get to meet your favorite internet superstar with the faceit app", 
      image: "../../assets/images/app-design/desktop/image-faceit.jpg" 
    },
    { 
      title: "TODO", 
      description: "A todo app that features cloud sync with light and dark mode", 
      image: "../../assets/images/app-design/desktop/image-todo.jpg" 
    },
    { 
      title: "LOOPSTUDIOS", 
      description: "A VR experience app made for Loopstudios", 
      image: "../../assets/images/app-design/desktop/image-loopstudios.jpg" 
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
    // {
    //   name: "App Design",
    //   link: "/app-design",
    //   images: {
    //     desktop: "../../assets/images/home/desktop/image-app-design.jpg",
    //     tablet: "../../assets/images/home/tablet/image-app-design.jpg",
    //     mobile: "../../assets/images/home/mobile/image-app-design.jpg",
    //   },
    // },
    {
      name: "Graphic Design",
      link: "/graphic-design",
      images: {
        desktop: "../../assets/images/home/desktop/image-graphic-design.jpg",
        tablet: "../../assets/images/home/tablet/image-graphic-design.jpg",
        mobile: "../../assets/images/home/mobile/image-graphic-design.jpg",
      },
    },
  ];
}
