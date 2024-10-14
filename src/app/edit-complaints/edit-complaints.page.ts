import { Component, OnInit } from '@angular/core';
import { EditService } from './edit.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-edit-complaints',
  templateUrl: './edit-complaints.page.html',
  styleUrls: ['./edit-complaints.page.scss'],
})
export class EditComplaintsPage implements OnInit {

 
  usersID : any = '';
  chassisNumber : any = '';
  complainType : any = '';
  complainRemark : any = '';
  id : any = '';

  constructor(private editService:EditService,
              private router:Router,
              private toastController:ToastController,private storageService:StorageService) { }

  ngOnInit() {

    
    this.storageService.get('USER_ID').then((userId) => {
      this.usersID = userId; // Retrieve userId from Ionic Storage
    });
  }


editComplain(){

    this.editService.complain(this.usersID,this.chassisNumber,this.complainType,this.complainRemark,this.id).subscribe((response:any) => {
      console.log(response);

      if(response.status == 1 || response.status == '1'){
        const message = response.message;
        this.toast(message);
        this.usersID  = '';
        this.chassisNumber ='';
        this.complainType  ='';
        this.complainRemark  = '';
        this.id = '';
      
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
