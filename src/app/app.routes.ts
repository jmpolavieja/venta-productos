import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FacturaComponent } from './factura/factura.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';

export const routes: Routes = [
  {path: 'productos', component: ListaProductosComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'nuevo-cliente', component: FormClienteComponent},
  {path: 'lista-clientes', component: ListadoClientesComponent}
];

// Estas son las rutas que me permitirán cambiar entre componentes a mostrar.
// Path indica la ruta, component indica cual es el compoenente que tiene que cargar
