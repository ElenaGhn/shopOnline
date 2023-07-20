import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule} from "./general/material/material.module";
import { MatButtonModule} from "@angular/material/button";
import { MatMenuModule} from "@angular/material/menu";
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule} from "@angular/material/list";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppRouterModule} from "./general/app-router/app-router.module";
import { ExtendedModule, FlexLayoutModule} from "@angular/flex-layout";
import { FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SliderImagesComponent } from './components/slider-images/slider-images.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { FooterComponent } from './components/footer/footer.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LandingPageComponent,
    SliderImagesComponent,
    AdvantagesComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    AppRouterModule,
    ExtendedModule,
    FontAwesomeModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
