import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-tiendas',
  templateUrl: './show-tiendas.component.html',
  styleUrls: ['./show-tiendas.component.css']
})
export class ShowTiendasComponent implements OnInit {


  constructor(private service: ApiserviceService) { }

  TiendasList: any = [];
  ModalTitle = "";
  ActivateAddEditTiendaComp: boolean = false;
  tienda: any;

  DepartmentIdFilter = "";
  DepartmentNameFilter = "";
  DepartmentListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.tienda = {
      Id: "0"
    }
    this.ModalTitle = "Agregar Tienda";
    this.ActivateAddEditTiendaComp = true;
  }

  editClick(item: any) {
    console.log(item);
    this.tienda = item;
    this.ModalTitle = "Editar Tienda";
    this.ActivateAddEditTiendaComp = true;
  }

  deleteClick(item: any) {
    console.log(item);
    if (confirm('Desea eliminar?')) {
      this.service.deleteTienda(item.id).subscribe(data => {

        this.refreshDepList();
        this.closeClick();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditTiendaComp = false;
    this.refreshDepList();
  }


  refreshDepList() {
    this.service.getTiendasList().subscribe(data => {
      console.log(data);
      this.TiendasList = data;
      this.DepartmentListWithoutFilter = data;
    });
  }

  sortResult(prop: any, asc: any) {
    this.TiendasList = this.DepartmentListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  FilterFn() {
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.TiendasList = this.DepartmentListWithoutFilter.filter(
      function (el: any) {
        return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        ) &&
          el.DepartmentName.toString().toLowerCase().includes(
            DepartmentNameFilter.toString().trim().toLowerCase())
      }
    );
  }

}
