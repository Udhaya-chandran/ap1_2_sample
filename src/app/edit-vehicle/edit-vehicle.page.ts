import { Component, OnInit } from '@angular/core';
import { EditService } from './edit.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.page.html',
  styleUrls: ['./edit-vehicle.page.scss'],
})
export class EditVehiclePage implements OnInit {


    userId : any = '';
    vehicleId : any = '';
    modelId : any = '';
    modelName : any = '';
    chasNumber : any = '';
    imei : any = '';
    regNum : any = '';

  
    constructor(private editService : EditService, private toastController:ToastController , private storageService:StorageService) { }
  
    ngOnInit() {
      
    this.storageService.get('USER_ID').then((userId) => {
      this.userId = userId; // Retrieve userId from Ionic Storage
    });
    }
  
  
    edit(){
      this.editService.user(this.userId,this.vehicleId,this.modelId,this.modelName,this.chasNumber,this.imei,this.regNum).subscribe((response:any) => {
        //  console.log(response);
  
         if(response.status == 1 || response.status == '1'){
           const message = response.message;
     
           this.toast(message);
           this.userId = '';
           this.vehicleId = '';
           this.modelId = '';
           this.modelName = '';
           this.chasNumber = '';
           this.imei = '';
           this.regNum = '';
           
  
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
  