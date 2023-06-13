import {Component, Input, OnInit} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  @Input() sidenav: MatSidenav;

  constructor() {}

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
