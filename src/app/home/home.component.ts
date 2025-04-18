import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  imageLink = {
    webDesign: '/web-design',
    appDesign: '/app-design',
    graphicDesign: '/graphic-design'
  };
}
