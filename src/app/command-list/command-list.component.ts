import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  products: any;
  headers = [
    'Item Name',
    'Item image',
    'Item Components',
    'Item quantity',
    'Type Of Order',
    'Action'
  ];
  constructor(/*private productService: ProductService*/) { }

  ngOnInit(): void {
    this.getProducts();
  }
  delete(id: string): void {

    /*this.orderService.delete(id).subscribe(msg => {
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
    this.products=[{'name':'Sandwich','id':'4','type':'Online','components':[{'name':'Lettuce / Tomato','quantity':2}],'image':'https://th.bing.com/th/id/OIP.1ZbcHW_vldK_9txGVZRYbwHaE8?pid=ImgDet&rs=1&fbclid=IwAR0bDOENQJHIn9NMKVGht8Qj-l1gF7BIvh3OlngOrN4OxIeIMWT99IPBy8g','quantity':'4'},
      {'name':'Pizza','id':'3','quantity':'1','image':'https://th.bing.com/th/id/OIP.KIU0ec1ueT7AVnrpY0peZwHaFj?pid=ImgDet&rs=1&fbclid=IwAR0YW2yKaR4bzaknwqyP8S0UuMsFLSKqkWdu4rFcg5fg4PN7VdN10mkLHIQ','type':'On Site','components':[{'name':'Thon','quantity':2}]}]

  }

}
