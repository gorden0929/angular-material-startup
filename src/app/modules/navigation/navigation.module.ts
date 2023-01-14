import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    ToolbarComponent,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
  ]
})
export class NavigationModule { }
