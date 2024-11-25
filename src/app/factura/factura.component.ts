import { Component, inject, OnInit } from '@angular/core';
import { FacturaService } from '../servicios/factura.service';
import { Factura } from '../modelos/factura';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css',
})
export class FacturaComponent implements OnInit {
  // Hemos implementado OnInit para que se dispare ngOnInit en su momento (al iniciar el componente)
  // Inyectamos el servicio para poder usar los datos que tiene almavenados
  facturaService = inject(FacturaService);

  // Version 2. Creo una factura y la inicializo
  factura: Factura = this.facturaService.getFactura();

  // Creamos el array que recibirá los productos comprados según el servicio
  //  articulos: Producto[] = [];

  // Al dispararse el ngOnInit cargamos los artículos comprados en articulos
  ngOnInit() {
    // this.articulos = this.facturaService.getArticulos();
  }
}
