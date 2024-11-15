import { Component, inject } from '@angular/core';
import { FacturaService } from '../servicios/factura.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos = [
    'Teclado Inalámbrico', 'Pantalla 23 pulgadas', 'CPU Gamer', 'Portátil LX3344'
  ];
  // Inyectar el servicio de factura
  facturaServicio = inject(FacturaService);

  // Este método le pasa el producto clicado al servicio de facturas
  addProducto(producto: string) {
    this.facturaServicio.addProducto(producto);
  }
}
