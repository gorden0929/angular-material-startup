import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MaterialModule,
    ToolbarComponent
  ]
})
export class NavigationModule { }
