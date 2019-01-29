import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';
import { ListPageComponent} from './list-page/list-page.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainTableComponent} from './main-table/main-table.component';
import { MainTreeComponent } from './main-tree/main-tree.component';
import { MainDragDropComponent } from './main-drag-drop/main-drag-drop.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'map-page', component: MapPageComponent },
  { path: 'list-page', component: ListPageComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'table', component: MainTableComponent },
  { path: 'tree', component: MainTreeComponent },
  { path: 'drag-drop', component: MainDragDropComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
