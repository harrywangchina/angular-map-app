import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { ListPageComponent} from './pages/list-page/list-page.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { MainTableComponent} from './pages/main-table/main-table.component';
import { MainTreeComponent } from './pages/main-tree/main-tree.component';
import { MainDragDropComponent } from './pages/main-drag-drop/main-drag-drop.component';

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
