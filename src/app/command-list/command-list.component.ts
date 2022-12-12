import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  products: any;
  headers = [
    'Product Name',
    'Product id',
    'image',
    'Components',
    'quantity',
    'Action'
  ];
  constructor(/*private productService: ProductService*/) { }

  ngOnInit(): void {
    this.getProducts();
  }
  delete(id: string): void {
    console.log("no")
    /*this.reservationService.delete(id).subscribe(msg => {
      this.error = msg.error;
      console.log(msg);
      if (!this.error) {
        window.location.reload();
      }
    });*/
  }
  getProducts(): void {
    /*this.productService.getProducts().subscribe(result => {
      this.products = result;
    }, error => {
      console.log(error);
    });*/
    this.products=[{'name':'Meat & Fish','id':'2','components':[{'name':'Fish / calamar','quantity':2}],'image':'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75','quantity':'2'},{'name':'Sushi','id':'3','quantity':'25','image':'https://th.bing.com/th/id/OIP.zxLULxIskXsPw5H0uALIAwHaHa?pid=ImgDet&rs=1','components':[{'name':'sushi','quantity':2}]}]

  }

}
