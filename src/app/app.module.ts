import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from "./general/material/material.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule} from "@angular/material/list";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AppRouterModule} from "./general/app-router/app-router.module";
import {ExtendedModule} from "@angular/flex-layout";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SliderImagesComponent } from './components/slider-images/slider-images.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloWorldComponent,
    NavigationComponent,
    LandingPageComponent,
    SliderImagesComponent,
    AdvantagesComponent,
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
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
