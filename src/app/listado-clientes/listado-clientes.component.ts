import { Component, inject } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { Cliente } from '../modelos/cliente';

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  clientesSvc = inject(ClientesService);

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clientes = this.clientesSvc.readClientes();
  }
}
