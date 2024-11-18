import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto';
import { Factura } from '../modelos/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  miFactura: Factura; // Creo la propiedad miFactura vacía y para que no de error uso ! que siginifica que puede ser indefinido.
  // productosComprados: Producto[] = [];

  constructor() {
    this.miFactura = {
      cliente: 'El cliente',
      fecha: new Date(),
      numFactura: 1,
      articulos: [],
      totalFactura: 0
    }
  }

  addProducto(producto: Producto) {
    let dto = 0;
    this.miFactura.articulos.push(producto); // Añadimos el producto al array de articulos de la factura
    // Sumar a totalFactura el precio del producto (menos el descuento si lo tuviera)
    if (producto.descuento) { // Si el producto recibido tiene descuento
      dto = (producto.precio / producto.descuento);
    }
    this.miFactura.totalFactura += producto.precio;
    this.miFactura.totalFactura -= dto;
  }

  getFactura(): Factura {
    return this.miFactura;
  }
}
