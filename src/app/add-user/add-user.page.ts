import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  uname : any = '';
  password : any = '';
  email : any = '';
  address : any = '';
  number : any = '';
  companyId : any = '';

  constructor(private userService : UserService, private toastController:ToastController) { }

  ngOnInit() {
  }


  add(){
    this.userService.user(this.uname,this.password,this.email,this.address,this.number,this.companyId).subscribe((response:any) => {
      //  console.log(response);

       if(response.status == 1 || response.status == '1'){
         const message = response.message;

         this.toast(message);
         this.uname = '';
         this.password = '';
         this.email = '';
         this.address = '';
         this.number = '';
         this.companyId = '';

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
