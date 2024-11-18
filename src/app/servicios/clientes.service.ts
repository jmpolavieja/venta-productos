import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [];

  createCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  readClientes(): Cliente[] {
    return this.clientes;
  }

  updateCliente(cliente: Cliente) {
    // Aquí modificaremos el origen de datos
  }

  deleteCliente(idCliente: string) {
    // Eliminará el cliente idCliente
  }
}
