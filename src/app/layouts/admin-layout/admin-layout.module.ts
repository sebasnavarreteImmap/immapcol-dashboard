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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    FilterPipeModule,
  ],
  declarations: [
    ImmapHomeComponent,
    ImmapFbDashboardComponent,
    ImmapProductsComponent,
  ]
})

export class AdminLayoutModule {}
