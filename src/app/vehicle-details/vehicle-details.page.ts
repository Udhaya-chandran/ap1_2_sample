import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../storage.service';
import { BoardService } from '../dashboard/board.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
})
export class VehicleDetailsPage implements OnInit {

  users_id : number = 1;
  data :  any[] = [];



  
  // // dashboard data
  // userId : number = 1;
  // report :  any[] = [];


  req_username: any = '';

  editMenuOpen: boolean = false;

  constructor(private vehicleService:VehicleService,
              private router:Router,
              private storage:Storage, private storageService:StorageService,
              private boardServ:BoardService,
              private navController: NavController) { }

   async ngOnInit() {
    
    this.details();
    // this.board();

    // const username = await this.storageService.get("username");
    // if (!username) {
    //   this.router.navigateByUrl('/home');
    //   return;
    // }
    // this.req_username = username;



    await this.storageService.set('USER_ID', this.users_id); // Store userId in Ionic Storage
  }





  details(){
    this.vehicleService.details(this.users_id).subscribe((response:any) =>{

     this.data = response. data;
    console.log(this.data);

    })
  }



  async handleRefresh(event: any) {
  this.details();
    setTimeout(() => {
    
      event.target.complete();
    }, 2000);
  }



  logout() {
    // this.storageService.remove("username").then(() => {
    //   this.router.navigateByUrl('/home');
    // });
  }



  // board(){
  //   this.boardServ.dash(this.userId).subscribe((response:any) => {
  //     this.report = response.report;
  //     console.log(this.report);
  //   })
  // }

//   add(){
//     this.router.navigateByUrl('/add-vehicle')
//   }

//   user(){
//     this.router.navigateByUrl('/add-user')
//   }
//   edit(){
//     this.router.navigateByUrl('/edit')
//   }


//   change(){
//     this.router.navigateByUrl('/password');
//   }
//   complain_details(){
//     this.router.navigateByUrl('/complain-details')
//   }

//   editVehicle(){
//     this.router.navigateByUrl('/edit-vehicle')
//   }
//   editComplaints(){
//     this.router.navigateByUrl('/edit-complaints')
//   }
//   addService(){
//     this.router.navigateByUrl('/add-service')
//   }
//   editService(){
//     this.router.navigateByUrl('/edit-service')
//   }

//   toggleEditMenu() {
//     this.editMenuOpen = !this.editMenuOpen;
//   }

//   complainAdd(){
//     this.router.navigateByUrl('/complain')
//   }
//  addProduct(){
//     this.router.navigateByUrl('/product')
//   }
//   editProduct(){
//     this.router.navigateByUrl('/edit-product');
//   }
//   addCustomer(){
//     this.router.navigateByUrl('/customer')
//   }
// editCustomer(){
//     this.router.navigateByUrl('/edit-customer')
//   }

//   list(){
//     this.router.navigateByUrl('/product-list')
//   }
//   cusList(){
//     this.router.navigateByUrl('/customer-list')
//   }

//   profile(){
//     this.router.navigateByUrl('/profile');
//   }

//   vehicleBooking() {
//     this.router.navigateByUrl('/booking');
//   }
  
}
