import { Component, inject, OnInit } from '@angular/core';
import { FacturaService } from '../servicios/factura.service';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [],
  templateUrl: './factura.component.html',
  styleUrl: './factura.component.css'
})
export class FacturaComponent implements OnInit {
  // Hemos implementado OnInit para que se dispare ngOnInit en su momento (al iniciar el componente)

  // Creamos el array que recibirá los productos comprados según el servicio
  articulos: string[] = [];
  // Inyectamos el servicio para poder usar los datos que tiene almavenados
  facturaService = inject(FacturaService);

  // Al dispararse el ngOnInit cargamos los artículos comprados en articulos
  ngOnInit() {
    this.articulos = this.facturaService.getArticulos();
  }

}
