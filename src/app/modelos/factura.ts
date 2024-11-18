import { Producto } from "./producto";

export interface Factura {
  cliente: string;
  fecha: Date;
  numFactura: number;
  articulos: Producto[];
  totalFactura: number;
}
