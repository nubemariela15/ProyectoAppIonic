import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'registrarse', loadChildren: './registrarse/registrarse.module#RegistrarsePageModule' },
  { path: 'prod-categorias', loadChildren: './prod-categorias/prod-categorias.module#ProdCategoriasPageModule' },
  { path: 'mis-pedidos', loadChildren: './mis-pedidos/mis-pedidos.module#MisPedidosPageModule' },
  { path: 'producto', loadChildren: './producto/producto.module#ProductoPageModule' },
  { path: 'factura', loadChildren: './factura/factura.module#FacturaPageModule' },
  { path: 'cestas', loadChildren: './cestas/cestas.module#CestasPageModule' },
  { path: 'cesta-dias', loadChildren: './cesta-dias/cesta-dias.module#CestaDiasPageModule' },
  { path: 'detalle', loadChildren: './detalle/detalle.module#DetallePageModule' },
  // { path: 'detalle-producto', loadChildren: './detalle-producto/detalle-producto.module#DetalleProductoPageModule' },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
