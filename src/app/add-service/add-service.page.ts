import { Component, OnInit } from '@angular/core';
import { AddServiceService } from './add-service.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  userId : any = '';
  vehicleId : any = '';
  date : any = '';
  time : any = '';
  type : any = '';
  remarks : any = '';
  number : any = '';

  constructor(private addService:AddServiceService, private toastController:ToastController, private storageService:StorageService) { }

  
  ngOnInit() {
   
    this.storageService.get('USER_ID').then((userId) => {
      this.userId = userId; // Retrieve userId from Ionic Storage
    });


   this.date = new Date().toISOString(); 

   let currentTime = new Date();
   this.time = currentTime.toISOString();
    // this.time = new Time().toISOString();
  }


  vehicleService(){
    this.addService.service(this.userId,this.vehicleId,this.date,this.time,this.type,this.remarks,this.number).subscribe((response:any) => {
       console.log(response);

       if(response.status == 1 || response.status == '1'){


         const message = response.message;

         this.toast(message);
         this.userId = '';
         this.vehicleId = '';
         this.date = '';
         this.time = '';
         this.type = '';
         this.remarks = '';
         this.number = '';

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



change(event:any){
  console.log(event);
}
  

}
