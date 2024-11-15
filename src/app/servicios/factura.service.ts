import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  productosComprados: string[] = [];

  addProducto(producto: string) {
    this.productosComprados.push(producto);
  }

  getArticulos() {
    return this.productosComprados;
  }
}
