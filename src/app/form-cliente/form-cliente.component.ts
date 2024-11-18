import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../servicios/clientes.service';
import { Cliente } from '../modelos/cliente';

@Component({
  selector: 'app-form-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css'
})
export class FormClienteComponent {
  // Formulario para crear un cliente nuevo
  clientesSvc = inject(ClientesService);
  cliente!: Cliente;

  addCliente() {
    console.log(this.cliente);

    this.clientesSvc.createCliente(this.cliente);
  }
}
