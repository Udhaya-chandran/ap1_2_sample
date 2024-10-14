import { Component, OnInit } from '@angular/core';
import { AddService } from './add.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage implements OnInit {

  uname: any = '';
  email : any = '';
  address : any = '';
  number : any = '';
  vehicleId : any = '';
  vehicleName : any = '';
  chassisNumber : any = '';
  imei : any = '';
  regNum : any = '';
  id : any = '';
  
  



  constructor(private addService:AddService ,  private toastController:ToastController , private storageService:StorageService) { }

  ngOnInit() {

    this.storageService.get('USER_ID').then((userId) => {
      this.id = userId; // Retrieve userId from Ionic Storage
    });
  }

  vehicle() {


    
    this.addService.addVehicle(
      this.uname,
      this.email,
      this.address,
      this.number,
      this.vehicleId,
      this.vehicleName,
      this.chassisNumber,
      this.imei,
    
      this.regNum,
      this.id,).subscribe((response: any) => {
    console.log(response);

        if(response.status ==  1 || response.status == '1'){
            const message = response.message;
           this.toast(message);
           this.uname = '';
           this.email = '';
           this.address = '';
           this.number = '';
           this.vehicleId = '';
           this.vehicleName = '';
           this.chassisNumber = '';
           this.imei = '';
           this.regNum  = '';
           this.id = '';
    this.toa(message);
        
        }else{
          const message = response.message;
         this.toast(message);
        }
      });
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

  async toa(message:any){
    const toast = await this.toastController.create({
      message:message,
      duration:2000,
      position : 'top',
      color: 'green'
     });
    toast.present();
  }
}
