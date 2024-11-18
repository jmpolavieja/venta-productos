import { Component, inject } from '@angular/core';
import { FacturaService } from '../servicios/factura.service';
import { Producto } from '../modelos/producto';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Producto[] = [
    {descripcion: 'Teclado Inalámbrico', precio: 25.98},
    {descripcion: 'Pantalla 23 pulgadas', precio: 16.67},
    {descripcion: 'CPU Gamer', precio: 234.65},
    {descripcion:'Portátil LX3344', precio: 340.45},
    {descripcion: 'Sauna Digital', precio: 2367, descuento: 10 }
  ];
  // Inyectar el servicio de factura
  facturaServicio = inject(FacturaService);

  // Este método le pasa el producto clicado al servicio de facturas
  addProducto(producto: Producto) {
    this.facturaServicio.addProducto(producto);
  }
}
