import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './pages/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatGridListModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule } from '@angular/material';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddrComponent } from './pages/addr/addr.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { MainTableComponent } from './pages/main-table/main-table.component';
import { MainTreeComponent } from './pages/main-tree/main-tree.component';
import { MainDragDropComponent } from './pages/main-drag-drop/main-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MapLeafletComponent } from './pages/map-leaflet/map-leaflet.component';
import { MapBaiduComponent } from './pages/map-baidu/map-baidu.component';
import { MapGoogleComponent } from './pages/map-google/map-google.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BaiduMapModule } from 'angular2-baidu-map';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MapPageComponent,
    ListPageComponent,
    AddrComponent,
    ShippingComponent,
    MainDashboardComponent,
    MainTableComponent,
    MainTreeComponent,
    MainDragDropComponent,
    MapLeafletComponent,
    MapBaiduComponent,
    MapGoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    DragDropModule,
    LeafletModule.forRoot(),
    BaiduMapModule.forRoot({ ak: 'IrTso78lj42f4AX7siKWzfM8ROHTYkMh' }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwko19tJnD4Ea3EnvKamfeySfv_RnpJ4Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
