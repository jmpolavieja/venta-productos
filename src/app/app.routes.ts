import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FacturaComponent } from './factura/factura.component';

export const routes: Routes = [
  {path: 'productos', component: ListaProductosComponent},
  {path: 'factura', component: FacturaComponent}
];

// Estas son las rutas que me permitirán cambiar entre componentes a mostrar.
// Path indica la ruta, component indica cual es el compoenente que tiene que cargar
