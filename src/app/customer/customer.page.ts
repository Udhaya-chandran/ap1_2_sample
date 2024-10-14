import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  userId : any = '';
  cusName : any = '';
  address : any = '';
  city:any = '';
  state : any = '';
  country : any = '';

  constructor(private customerServe : CustomerService, private toastController:ToastController, private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.get('USER_ID').then((userId) => {
      this.userId = userId; // Retrieve userId from Ionic Storage
    });
    
  }


  addCustomer(){
    this.customerServe.cus(this.userId,this.cusName,this.address,this.city,this.state,this.country).subscribe((response:any) => {
      //  console.log(response);

       if(response.status == 1 || response.status == '1'){
         const message = response.message;

         this.toast(message);
         this.userId = '';
         this.cusName = '';
         this.address = '';
         this.city = '';
         this.state= '';
         this.country = '';

       }
       else{
        const message = response.message;

        this.toast(message);

       }
    })
  }

  
 async toast(message:any){
  const toast = await this.toastController.create({
    message:message,
    duration:2000,
    position : 'top',
    color: 'danger'
   });
  toast.present();
}
}
