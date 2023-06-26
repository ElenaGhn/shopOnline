import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SliderImage} from "../slider-images/slider-images.component";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  newsletter: FormGroup;

  images: SliderImage[] = [
    {
      source: './assets/images/1.jpg ',
      alt: '00'
    },
    {
      source: './assets/images/2.jpg',
      alt: '00'
    },
    {
      source: './assets/images/3.jpg',
      alt: '00'
    },
    {
      source: './assets/images/4.jpg',
      alt: '00'
    },
    {
      source: './assets/images/5.jpg',
      alt: '00'
    },
    {
      source: './assets/images/6.jpg',
      alt: '00'
    },
    {
      source: './assets/images/7.jpg',
      alt: '00'
    },
    {
      source: './assets/images/8.jpg',
      alt: '00'
    }
  ]

  constructor() {
  }

  ngOnInit() {
    this.newsletter = new FormGroup({
      'newsletter': new FormControl('', [Validators.required, Validators.email])
    })
  }
}
