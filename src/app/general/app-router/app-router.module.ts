import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {AboutComponent} from "../../components/about/about.component";
import {ContentComponent} from "../../components/content/content.component";

const routes: Route[] = [
  {
    path: '', component: ContentComponent

  },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // ???
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
