import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  newsletter: FormGroup;

constructor() {
}

ngOnInit(): void {
  this.newsletter = new FormGroup({
    'newsletter': new FormControl('', [Validators.required, Validators.email])
  })
}



}
