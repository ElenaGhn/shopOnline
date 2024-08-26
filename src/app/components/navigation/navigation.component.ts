import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements AfterViewInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor() {}

  ngAfterViewInit() {
    // sidenav ist nun initialisiert
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    } else {
      console.warn("Sidenav ist noch nicht initialisiert");
    }
  }
}
