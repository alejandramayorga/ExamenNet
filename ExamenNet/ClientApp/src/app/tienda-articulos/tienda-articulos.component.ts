import { Component} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { of } from 'rxjs';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-tienda-articulos',
  templateUrl: './tienda-articulos.component.html',
  styleUrls: ['./tienda-articulos.component.css']
})
export class TiendaArticulosComponent  {

  formc: FormGroup;
  tiendas = [{id:'',sucursal: ''} ];
  articulos = [{id:'',descripcion: '', isChecked: false} ];
  selectedItemsList = [{id:'',descripcion: '', isChecked: false} ];
  selectedTienda = 0;
  listaSeleccionados = [{id:0,IdArticulo: '', idTienda: 0} ];


  get articulosFormArray() {
    return this.formc.controls.articulos as FormArray;
  }


  constructor(private formBuilder: FormBuilder, private service: ApiserviceService) {
    this.formc = this.formBuilder.group({
      orders: new FormArray([]),
      tiendas: [''],
      articulos: ['']
    });

    this.addCheckboxes();
    this.fillTiendaList();
  }

  private addCheckboxes() {
    console.log('entro');
    this.service.getArticulosList().subscribe(data => {
      console.log(data);
      this.articulos = data;
      console.log(this.articulos);
      //this.articulos.forEach(() => this.articulosFormArray.push(new FormControl(false)));
    });
 
  }

  changeSelection(index: number) {
    console.log(index);
    this.fetchSelectedItems()
  }
  fetchSelectedItems() {
    this.selectedItemsList = this.articulos.filter((value, index) => {
      return value.isChecked
    });
    console.log(this.selectedItemsList);
  }

  fillTiendaList() {
    this.service.getTiendasList().subscribe(data => {
      console.log(data);
      this.tiendas = data;
    });
  }

	onSelected(value:string): void {
		this.selectedTienda = Number(value);
	}


  submit() {
    this.listaSeleccionados=[];
    console.log(this.articulos);
    var t = this.articulos
    .filter(opt => opt.isChecked)
    .map(opt => opt);
    console.log(t);
    console.log(this.selectedTienda);

    t.forEach(item => {
      var element = {
        id: 0,
        IdArticulo: item.id,
        idTienda: this.selectedTienda
      };
      console.log(element);
      this.listaSeleccionados.push(element);


    });
   
    console.log(this.listaSeleccionados);

    this.service.addTiendaArticulos(this.listaSeleccionados).subscribe(data => {
      //this.articulos.forEach(() => this.articulosFormArray.push(new FormControl(false)));
    });
  }
}
