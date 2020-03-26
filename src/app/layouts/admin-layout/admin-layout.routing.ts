import { Routes } from '@angular/router';

import { ImmapHomeComponent } from '../../immap-home/immap-home.component';
import { ImmapFbDashboardComponent } from '../../immap-fb-dashboard/immap-fb-dashboard.component';
import { ImmapProductsComponent } from '../../immap-products/immap-products.component';
import { ImmapSourcesComponent } from '../../immap-sources/immap-sources.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: ImmapHomeComponent },
    { path: 'fb-dashboard',   component: ImmapFbDashboardComponent },
    { path: 'products',   component: ImmapProductsComponent },
    { path: 'sources',   component: ImmapSourcesComponent },
];
