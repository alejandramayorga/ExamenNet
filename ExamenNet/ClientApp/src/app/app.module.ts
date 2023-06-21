import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ShowArticulosComponent } from './articulos/show-articulos/show-articulos.component';
import {AddEditArticulosComponent} from './articulos/add-edit-articulos/add-edit-articulos.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { ShowTiendasComponent } from './tiendas/show-tiendas/show-tiendas.component';
import {AddEditTiendasComponent} from './tiendas/add-edit-tiendas/add-edit-tiendas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ShowClientesComponent } from './clientes/show-clientes/show-clientes.component';
import {AddEditClientesComponent} from './clientes/add-edit-clientes/add-edit-clientes.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {ApiserviceService} from './apiservice.service';
import { TiendaArticulosComponent } from './tienda-articulos/tienda-articulos.component';
import { ShopComponent } from './shop/shop.component';
import { TiendaproductsComponent } from './tiendaproducts/tiendaproducts.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ItemComponent } from './carrito/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ArticulosComponent,
    ShowArticulosComponent,
    AddEditArticulosComponent,
    TiendasComponent,
    ShowTiendasComponent,
    AddEditTiendasComponent,
    ClientesComponent,
    ShowClientesComponent,
    AddEditClientesComponent,
    TiendaArticulosComponent,
    ShopComponent,
    TiendaproductsComponent,
    CarritoComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'articulos', component: ArticulosComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'tiendas', component: TiendasComponent },
      { path: 'tienda', component: ShopComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
