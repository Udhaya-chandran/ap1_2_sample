import { Component, OnInit } from '@angular/core';
import { PassService } from './pass.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  userId : any = '';
  current_pass : any = '';
  new_pass : any = '';
  confirm_pass : any = '';

  constructor(private passService:PassService,
              private router:Router,
              private toastController:ToastController , private storageService:StorageService) { }

  ngOnInit() {
    
    this.storageService.get('USER_ID').then((userId) => {
      this.userId = userId; // Retrieve userId from Ionic Storage
    });
  }


  
   change(){

    this.passService.password(this.userId,this.current_pass,this.new_pass,this.confirm_pass).subscribe((response:any) => {
      console.log(response);

      if(response.status == 1 || response.status == '1'){
        const message = response.message;

        this.toast(message);
        this.userId  = '';
        this.current_pass ='';
        this.new_pass  ='';
        this.confirm_pass  = '';
      
      }
      else{
        const message = response.message
        // console.log(message)
        this.toast(message);
        0
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
