import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
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
}
