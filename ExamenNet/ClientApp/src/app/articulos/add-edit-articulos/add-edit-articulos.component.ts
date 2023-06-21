import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-articulos',
  templateUrl: './add-edit-articulos.component.html',
  styleUrls: ['./add-edit-articulos.component.css']
})
export class AddEditArticulosComponent implements OnInit {

  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(private service: ApiserviceService) { }

  @Input() depart: any;
  Id = 0;
  Codigo = "";
  Descripcion = "";
  Precio = "";
  Imagen : any;
  Stock = "";

  public filecontent: File[] = [];

  ngOnInit(): void {

    this.Id = this.depart.id;
    this.Codigo = this.depart.codigo;
    this.Descripcion = this.depart.descripcion;
    this.Precio = this.depart.precio;
    this.Imagen = this.depart.imagen;
    this.Stock = this.depart.stock;
  }

  onFileSelected(e: any) {
    for (var i = 0; i < e.target.files.length; i++) {
        this.filecontent.push(e.target.files[i]);
    }
}

  addArticle() {
    var dept = {
      Id: 0,
      Codigo: this.Codigo,
      Descripcion: this.Descripcion,
      Precio: this.Precio,
      Imagen: "imagen",
      Stock: this.Stock,
    };



   this.service.addArticulos(dept).subscribe(res => {
      //alert(res.toString());
    });
  }

  updateArticle() {
    var dept = {
      Id: this.Id,
      Codigo: this.Codigo,
      Descripcion: this.Descripcion,
      Precio: this.Precio,
      Imagen: "imagen",
      Stock: this.Stock,
    };
    console.log(dept);
    this.service.updateArticulo(dept).subscribe(res => {
     // alert(res.toString());
    });

  }

}
