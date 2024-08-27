import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface SliderImage {
  source: string;
  alt: string;
  price: number; // Preis des Bildes
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  newsletter: FormGroup;

  images: SliderImage[] = [];

  constructor() {}

  ngOnInit() {
    this.newsletter = new FormGroup({
      'newsletter': new FormControl('', [Validators.required, Validators.email])
    });

    // Initialisiere den images Array mit zufälligen Preisen
    this.images = [
      { source: './assets/images/1.jpg', alt: '00', price: this.generateRandomPrice(0.99, 30) },
      { source: './assets/images/2.jpg', alt: '00', price: this.generateRandomPrice(0.99, 30) },
      { source: './assets/images/3.jpg', alt: '00', price: this.generateRandomPrice(0.99, 30) },
      { source: './assets/images/4.jpg', alt: '00', price: this.generateRandomPrice(0.99, 30) },
      { source: './assets/images/5.jpg', alt: '00', price: this.generateRandomPrice(0.99, 30) },
      { source: './assets/images/6.jpg', alt: '00', price: this.generateRandomPrice(0.99, 30) },
      { source: './assets/images/7.jpg', alt: '00', price: this.generateRandomPrice(0.99, 30) },
      { source: './assets/images/8.jpg', alt: '00', price: this.generateRandomPrice(0.99, 30) }
    ];
  }

  // Funktion zum Generieren eines zufälligen Preises zwischen min und max
  generateRandomPrice(min: number, max: number): number {
    return +(Math.random() * (max - min) + min).toFixed(2);
  }
}
