import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';
import { FilterPipeModule } from 'ngx-filter-pipe';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { ImmapHomeComponent } from '../../immap-home/immap-home.component';
import { ImmapFbDashboardComponent } from '../../immap-fb-dashboard/immap-fb-dashboard.component';
import { ImmapProductsComponent } from '../../immap-products/immap-products.component';
import { ImmapSourcesComponent } from '../../immap-sources/immap-sources.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    FilterPipeModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ImmapHomeComponent,
    ImmapFbDashboardComponent,
    ImmapProductsComponent,
    ImmapSourcesComponent,
  ]
})

export class AdminLayoutModule {}
