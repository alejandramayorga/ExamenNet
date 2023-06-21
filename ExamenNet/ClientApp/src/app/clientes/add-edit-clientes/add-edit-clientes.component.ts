import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-clientes',
  templateUrl: './add-edit-clientes.component.html',
  styleUrls: ['./add-edit-clientes.component.css']
})
export class AddEditClientesComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() cliente: any;
  Id = 0;
  Nombre = "";
  Apellidos = "";
  Direccion = "";


  ngOnInit(): void {
    this.Id = this.cliente.id;
    this.Nombre = this.cliente.nombre;
    this.Apellidos = this.cliente.apellidos;
    this.Direccion = this.cliente.direccion;

  }

  
  AddCliente() {
    var newCliente = {
      Id: 0,
      Nombre: this.Nombre,
      Apellidos: this.Apellidos,
      Direccion: this.Direccion,
    };



   this.service.addCliente(newCliente).subscribe(res => {
      //alert(res.toString());
    });
  }

  updateCliente() {
    var updatedCliente = {
      Id: this.Id,
      Nombre: this.Nombre,
      Apellidos: this.Apellidos,
      Direccion: this.Direccion,
    };

    this.service.updateCliente(updatedCliente).subscribe(res => {
     // alert(res.toString());
    });

  }

}
