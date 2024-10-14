import { Component, OnInit } from '@angular/core';
import { ListCustomerService } from './list-customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {

  listId : number = 1;
  data :  any[] = [];
  constructor(private cusServe:ListCustomerService) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this.cusServe.showList(this.listId).subscribe((response:any) => {
      this.data = response.data;
      console.log(this.data);
    })
  }


  async handleRefresh(event: any) {
  this.list();
    setTimeout(() => {
    
      event.target.complete();
    }, 2000);
  }

}
