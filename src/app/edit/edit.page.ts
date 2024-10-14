import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  userId : any = '';
  uname : any = '';
  password : any = '';
  email : any = '';
  address : any = '';
  number : any = '';
  companyId : any = '';
  cusId : any = '';

  constructor(private userService : UserService, private toastController:ToastController,private storageService:StorageService) { }

  ngOnInit() {
    
    this.storageService.get('USER_ID').then((userId) => {
      this.userId = userId; // Retrieve userId from Ionic Storage
    });
  }


  edit(){
    this.userService.user(this.userId,this.uname,this.password,this.email,this.address,this.number,this.companyId,this.cusId).subscribe((response:any) => {
      //  console.log(response);

       if(response.status == 1 || response.status == '1'){
         const message = response.message;
   
         this.toast(message);
         this.userId = '';
         this.uname = '';
         this.password = '';
         this.email = '';
         this.address = '';
         this.number = '';
         this.companyId = '';
         this.cusId = '';

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
