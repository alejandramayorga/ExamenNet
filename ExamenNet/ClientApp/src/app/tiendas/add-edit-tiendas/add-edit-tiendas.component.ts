import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-tiendas',
  templateUrl: './add-edit-tiendas.component.html',
  styleUrls: ['./add-edit-tiendas.component.css']
})
export class AddEditTiendasComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() tienda: any;
  Id = 0;
  Sucursal = "";
  Direccion = "";


  ngOnInit(): void {
    this.Id = this.tienda.id;
    this.Sucursal = this.tienda.sucursal;
    this.Direccion = this.tienda.direccion;
  }

  
  AddTienda() {
    var nuevaTienda = {
      Id: 0,
      Sucursal: this.Sucursal,
      Direccion: this.Direccion
    };



   this.service.addTienda(nuevaTienda).subscribe(res => {
      //alert(res.toString());
    });
  }

  UpdateTienda() {
    var updatedCliente = {
      Id: this.Id,
      Sucursal: this.Sucursal,
      Direccion: this.Direccion,
    };

    this.service.updateTienda(updatedCliente).subscribe(res => {
     // alert(res.toString());
    });

  }


}
