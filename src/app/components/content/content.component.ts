import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor() {}

  ngOnInit() {}
// recherche machen
  toggleSidenav() {
    this.sidenav.toggle();
  }
}
