import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItem } from './product.model';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-tiendaproducts',
  templateUrl: './tiendaproducts.component.html',
  styleUrls: ['./tiendaproducts.component.css']
})
export class TiendaproductsComponent implements OnInit {


/*     productItem: ProductItem[] = [
      new ProductItem(1, 'Laptop', 750, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FpRKXeVbKWa1Wo75eOMva5FrE7QCREZgJj8iWNRZf9me2BcCRg'),
      new ProductItem(2,'Tesla X', 133000, 'http://st.motortrend.com/uploads/sites/5/2016/03/2016-Tesla-Model-X-P90D-front-three-quarter-doors-open.jpg'),
      new ProductItem(3,'Tesla S', 102000, 'https://media.ed.edmunds-media.com/tesla/model-s/2016/oem/2016_tesla_model-s_sedan_p90d_fq_oem_2_1280.jpg'),
      new ProductItem(4,'Tesla Y', 35000, 'https://www.tesla.com/sites/default/files/images/blogs/models_blog_post.jpg'),
    ] */
    productItem: any = [];
    @Output() cartUpdated = new EventEmitter<{
      productId: number,
      productName: string,
      productPrice: number
    }>();
  
    constructor(private service: ApiserviceService) { }
  
    ngOnInit() {
      this. refreshDepList();
    }

    refreshDepList() {
      this.service.getArticulosList().subscribe(data => {

        this.productItem = data;

      });
    }
  
    onCartUpdated(event:any) {
      const id = event.target.getAttribute('id');
      const index = this.productItem.findIndex((elem: { id: any; }) => elem.id == id);
      this.cartUpdated.emit({
          productId: this.productItem[index].id,
          productName: this.productItem[index].descripcion,
          productPrice: this.productItem[index].precio
        });
  }
  
  

}
