import { Component, OnInit } from '@angular/core';
import { EditserviceService } from './editservice.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.page.html',
  styleUrls: ['./edit-customer.page.scss'],
})
export class EditCustomerPage implements OnInit {

   Id : any = '';
  cusId:any = '';
  cusName : any = '';
  address : any = '';
  city:any = '';
  state : any = '';
  country : any = '';

  constructor(private editServe : EditserviceService, private toastController:ToastController , private storageService:StorageService) { }

  ngOnInit() {
    this.storageService.get('USER_ID').then((userId) => {
      this.Id = userId; // Retrieve userId from Ionic Storage
    });
  }


 editCustomer(){
    this.editServe.edit(this.Id,this.cusId,this.cusName,this.address,this.city,this.state,this.country).subscribe((response:any) => {
      //  console.log(response);

       if(response.status == 1 || response.status == '1'){
         const message = response.message;

         this.toast(message);
         this.Id = '';
         this.cusId = '';
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
