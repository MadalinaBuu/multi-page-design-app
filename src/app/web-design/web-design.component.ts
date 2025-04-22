import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-web-design',
  imports: [CommonModule],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})
export class WebDesignComponent {
  cards = [
    { 
      title: "Express", 
      description: "A multi-carrier shipping website for ecommerce businesses", 
      image: "../../assets/images/web-design/desktop/image-express.jpg" 
    },
    { 
      title: "Transfer", 
      description: "A state-of-the-art music player with high-resolution audio and DSP effects", 
      image: "../../assets/images/web-design/desktop/image-transfer.jpg" 
    },
    { 
      title: "Photon", 
      description: "A state-of-the-art music player with high-resolution audio and DSP effects", 
      image: "../../assets/images/web-design/desktop/image-photon.jpg" 
    },
    { 
      title: "Builder", 
      description: "Connects users with local contractors based on their location", 
      image: "../../assets/images/web-design/desktop/image-builder.jpg" 
    },
    { 
      title: "Blogr", 
      description: "Blogr is a platform for creating an online blog or publication", 
      image: "../../assets/images/web-design/desktop/image-blogr.jpg" 
    },
    { 
      title: "Camp", 
      description: "Get expert training in coding, data, design, and digital marketing", 
      image: "../../assets/images/web-design/desktop/image-camp.jpg" 
    }
  ];
  
}
