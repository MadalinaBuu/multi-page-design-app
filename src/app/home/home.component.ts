import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesSectionComponent } from '../shared/services-section/services-section.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, ServicesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
    },
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

  strengths = [
    {
      name: "Passionate",
      description: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      image: "../../assets/images/home/desktop/illustration-passionate.svg",
      circleRotation: "rotate(0deg)" // No rotation for first image
    },
    {
      name: "Resourceful",
      description: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      image: "../../assets/images/home/desktop/illustration-resourceful.svg",
      circleRotation: "rotate(180deg)" // No rotation for first image
    },
    {
      name: "Friendly",
      description: "  We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide..",
      image: "../../assets/images/home/desktop/illustration-friendly.svg",
      circleRotation: "rotate(90deg)" // No rotation for first image
    }
  ];
}
