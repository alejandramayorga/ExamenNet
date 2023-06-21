import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-clientes',
  templateUrl: './show-clientes.component.html',
  styleUrls: ['./show-clientes.component.css']
})
export class ShowClientesComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  ClientesList: any = [];
  ModalTitle = "";
  ActivateAddEditCleinteComp: boolean = false;
  cliente: any;

  DepartmentIdFilter = "";
  DepartmentNameFilter = "";
  DepartmentListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.cliente = {
      Id: "0"
    }
    this.ModalTitle = "Agregar Articulo";
    this.ActivateAddEditCleinteComp = true;
  }

  editClick(item: any) {
    console.log(item);
    this.cliente = item;
    this.ModalTitle = "Editar Cliente";
    this.ActivateAddEditCleinteComp = true;
  }

  deleteClick(item: any) {
    console.log(item);
    if (confirm('Desea eliminar?')) {
      this.service.deleteCiente(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
        this.closeClick();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditCleinteComp = false;
    this.refreshDepList();
  }


  refreshDepList() {
    this.service.getClientesList().subscribe(data => {
      console.log(data);
      this.ClientesList = data;
      this.DepartmentListWithoutFilter = data;
    });
  }

  sortResult(prop: any, asc: any) {
    this.ClientesList = this.DepartmentListWithoutFilter.sort(function (a: any, b: any) {
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

    this.ClientesList = this.DepartmentListWithoutFilter.filter(
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
