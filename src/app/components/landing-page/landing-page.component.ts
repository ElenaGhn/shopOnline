import { Component, OnInit } from '@angular/core';
import {SliderImage} from "../slider-images/slider-images.component";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  images: SliderImage[] = [
    {
      source: './assets/images/1.jpg',
      alt: '00'
    }
    ]
  constructor() {}

  ngOnInit(): void {}

}
