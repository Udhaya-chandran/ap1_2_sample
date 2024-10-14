import { Component, OnInit } from '@angular/core';
import { ComplainService } from './complain.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.page.html',
  styleUrls: ['./complain.page.scss'],
})
export class ComplainPage implements OnInit {

  Id : any = '';
  chassisNumber : any = '';
  complainType : any = '';
  complainRemark : any = '';

  constructor(private complainService:ComplainService,
              private router:Router,
              private toastController:ToastController, private storageService:StorageService) { }

  ngOnInit() {

    this.storageService.get('USER_ID').then((userId) => {
      this.Id = userId; // Retrieve userId from Ionic Storage
    });
  }
  


  complain(){

   
    
 
    this.complainService.complain(this.Id,this.chassisNumber,this.complainType,this.complainRemark).subscribe((response:any) => {
      console.log(response);

      if(response.status == 1 || response.status == '1'){
        const message = response.message;
        this.toast(message);
        this.Id  = '';
        this.chassisNumber ='';
        this.complainType  ='';
        this.complainRemark  = '';
      
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
