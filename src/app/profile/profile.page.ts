import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../dashboard/board.service';
import { StorageService } from '../storage.service';


import { Network } from '@capacitor/network';
import { PluginListenerHandle } from '@capacitor/core';

import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userId : number = 1;
  data :  any[] = [];
  req_username: any = '';
  networkListener:PluginListenerHandle | any;
  status: boolean | any;

  

  constructor(private boardServ:BoardService , 
              private router:Router, 
              private storageService:StorageService, 
              private ngZone:NgZone, 
              private navController:NavController, 
            ) { }

  async ngOnInit() {
    this.board();
    const username = await this.storageService.get("username");
    if (!username) {
      this.router.navigateByUrl('/home');
      return;
    }
    this.req_username = username;
    
    this.networkListener = await Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.ngZone.run(() => {    //it check and run automatically tells online or offline 
      this.changeStatus(status);
    });
  });
      const status = await Network.getStatus();
      console.log('Network status:',status);
      
      this.changeStatus(status);  
      console.log('Network status:',this.status);
    }


  changeStatus(status: any){
    this.status = status?.connected;
    if(!this.status){
      this.router.navigateByUrl('/offline',{ replaceUrl: true });
    }
  }
  

  // ngOnDestroy(): void {  // it removes the current page during offline
  //   if(this.networkListener) this.networkListener.remove()
  //   }


  board(){
    this.boardServ.dash(this.userId).subscribe((response:any) => {
      this.data = response.data;
      console.log(this.data);
    })
  }


  logout() {
    this.storageService.remove("username").then(() => {
      this.router.navigateByUrl('/home');
    });
  }
  

  async handleRefresh(event: any) {
    this.board();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  


  
 


  // user(){
  //   this.router.navigateByUrl('/add-user');
  // }
  
  // userEdit(){
  //   this.router.navigateByUrl('/edit');
  // }

  // addVehicle(){
  //   this.router.navigateByUrl('\add-vehicle')
  // }
  // editVehicle(){
  //   this.router.navigateByUrl('\edit-vehicle')
  // }
  // listVehicle(){
  //   this.router.navigateByUrl('\vehicle-details')
  // }

  //  addproduct(){
  //   this.router.navigateByUrl('\product')
  // }
  // editproduct(){
  //   this.router.navigateByUrl('\edit-product')
  // }
  // listproduct(){
  //   this.router.navigateByUrl('\product-list')
  // }

  // addcustomer(){
  //   this.router.navigateByUrl('\customer')
  // }
  // editcustomer(){
  //   this.router.navigateByUrl('\edit-customer')
  // }
  // listcustomer(){
  //   this.router.navigateByUrl('\customer-list')
  // }

  // addcomplain(){
  //   this.router.navigateByUrl('\complain')
  // }
  // editcomplain(){
  //   this.router.navigateByUrl('\edit-complaints')
  // }
  // listcomplain(){
  //   this.router.navigateByUrl('\complain-details')
  // }



  // addservice(){
  //   this.router.navigateByUrl('\add-service')
  // }
  // editservice(){
  //   this.router.navigateByUrl('\edit-service')
  // }



  
  password(){
    this.router.navigateByUrl('\password')
  }


  add(){
    this.router.navigateByUrl('/add-vehicle')
  }

  user(){
    this.router.navigateByUrl('/add-user')
  }
  edit(){
    this.router.navigateByUrl('/edit')
  }


  change(){
    this.router.navigateByUrl('/password');
  }
  complain_details(){
    this.router.navigateByUrl('/complain-details')
  }

  editVehicle(){
    this.router.navigateByUrl('/edit-vehicle')
  }


  VehicleDetails(){

    this.router.navigateByUrl('/vehicle-details')
  }
  editComplaints(){
    this.router.navigateByUrl('/edit-complaints')
  }
  addService(){
    this.router.navigateByUrl('/add-service')
  }
  editService(){
    this.router.navigateByUrl('/edit-service')
  }


  complainAdd(){
    this.router.navigateByUrl('/complain')
  }
 addProduct(){
    this.router.navigateByUrl('/product')
  }
  editProduct(){
    this.router.navigateByUrl('/edit-product');
  }
  addCustomer(){
    this.router.navigateByUrl('/customer')
  }
editCustomer(){
    this.router.navigateByUrl('/edit-customer')
  }

  list(){
    this.router.navigateByUrl('/product-list')
  }
  cusList(){
    this.router.navigateByUrl('/customer-list')
  }

  profile(){
    this.router.navigateByUrl('/profile');
  }

  vehicleBooking() {
    this.router.navigateByUrl('/booking');
  }
  


  callbadge(){
   
  }
}
















