import {Component, OnInit} from '@angular/core';
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.css']
})
export class SliderImagesComponent implements OnInit {

  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;

  interval = 5000;

  images: SliderImage[] = [
    {
      source: './assets/images/1-1.jpg',
      alt: '00'
    },
    {
      source: './assets/images/1-2.jpg',
      alt: '00'
    },
    {
      source: './assets/images/1-3.jpg',
      alt: '00'
    },
    {
      source: './assets/images/1-4.jpg',
      alt: '00'
    }
  ]

  index: number = 0;


  ngOnInit(): void {
    this.slideAutomatic();
  }

  slideAutomatic() {
    setInterval(() => {
      this.nextPicture();
    }, this.interval);
  }

  chooseImage(index: number) {
    this.index = index;
  }

  prevPicture() {
    if (this.index == 0) {
      this.index = this.images.length - 1;
    } else {
      this.index--;
    }
  }

  nextPicture() {
    if (this.index == this.images.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }
}

export interface SliderImage {
  source: string;
  alt: string;
}
