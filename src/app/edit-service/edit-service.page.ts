import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EditServiceService } from './edit-service.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {

  Id : any = '';
  serviceId : any = '';
  date : any = '';
  time : any = '';
  serviceCenter : any = '';

  constructor( private editService:EditServiceService,
              private router:Router,
              private toastController:ToastController, private storageService:StorageService) { }

  ngOnInit() {
    
    this.storageService.get('USER_ID').then((userId) => {
      this.Id = userId; // Retrieve userId from Ionic Storage
    });

    this.date = new Date().toISOString(); 

    let currentTime = new Date();
    this.time = currentTime.toISOString();
  }


editComplain(){

    this.editService.serve(this.Id,this.serviceId,this.date,this.time,this.serviceCenter).subscribe((response:any) => {
      console.log(response);

      if(response.status == 1 || response.status == '1'){
        const message = response.message;
        this.toast(message);
        this.Id  = '';
        this.serviceId ='';
        this.date  ='';
        this.time  = '';
        this.serviceCenter = '';
      
      }
      else{
        const message = response.message
        this.toast(message)
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
