import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapPageComponent } from './map-page/map-page.component';
import { ListPageComponent} from './list-page/list-page.component';

const routes: Routes = [
  { path: 'map-page', component: MapPageComponent },
  { path: 'list-page', component: ListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
