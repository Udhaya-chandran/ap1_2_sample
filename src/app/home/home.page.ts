import { Component, NgZone, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { StorageService } from '../storage.service';
import { NewsService } from '../news.service';
import { Network } from '@capacitor/network';
import { PluginListenerHandle } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  uname: any = '';
  password: any = '';
  errorMessage : any = '';
  isUnameError: boolean = false ;
  isPasswordError:boolean = false;

  isUnameErrorMessage : any = '';
  isPasswordErrorMessage:any = '';

  data: any;


  networkListener:PluginListenerHandle | any;
  status: boolean | any;
 

  constructor(private apiServ : LoginService, 
    private toastController : ToastController , 
    private router: Router,
    private storageService: StorageService,
    private platform : Platform ,
    public getdata: NewsService,
    private ngZone:NgZone,) {}

  async ngOnInit() {

    
    this.platform.backButton.subscribeWithPriority(10, () => {        // Do nothing to prevent going back to the login page
     
    });
    
    const username = await this.storageService.get("username");
    if (username) {
      this.router.navigateByUrl('/profile');
    }

          // this.getdata.doGet().subscribe(
          //   (res: any) => {
          //     this.data = res.articles;
          //     console.log(this.data);
          //   },
          //   (error: any) => {
          //     console.error('Error fetching news:', error);
          //   }
          // );


          this.networkListener = await Network.addListener('networkStatusChange', status => {
            console.log('Network status changed', status); 
        
            this.ngZone.run(() => {    //it check and run automatically tells online or offline 
            this.changeStatus(status);
            
           });
        
          });
          
        
            const status = await Network.getStatus();
             console.log('Network status:',status);
        
            this.changeStatus(status);  
            console.log('Network status:',this.status);
      
  }



  changeStatus(status: any){

    this.status = status?.connected;


    if(!this.status){
     this.router.navigateByUrl('/offline',{ replaceUrl: true });
    }
    
  }

  
  ngOnDestroy(): void {  // it removes the current page during offline

    if(this.networkListener) this.networkListener.remove()   
    
  }

  login() {
    this.isUnameError = false;
    this.isPasswordError = false;

    this.apiServ.login(this.uname, this.password).subscribe((response : any) => {

      if (response.status == 1 && response.status =='1') {
        //  const message = response.message;
        //  console.log(message);
        //  this.router.navigateByUrl('/vehicle-details');
        this.storageService.set("username", this.uname).then(() => {
         this.router.navigateByUrl('/profile');

          // this.router.navigateByUrl('/vehicle-details');
       
        });
      } else {
       this.toast(response.message);

     
      }
      if (!this.uname) {
        const message = response.message;
        this.isUnameError = true;
        this.  isUnameErrorMessage = message;
        return;
      }
      if(!this.password){
        const message = response.message
        this.isPasswordError = true;
        this.isPasswordErrorMessage = message;
        return;
      }
      if (response.status !== 1 && response.status !== '1') {
        const message = response.message;
        this.toast(response.message);
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
  removeError() {
    this.isUnameError = false;
    this.isPasswordError = false;
  }




    
  }














// import { Component } from '@angular/core';
// import { NewsService } from '../news.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {
//   data: any;

//   constructor(public getdata: NewsService, private router : Router) { }

//   ngOnInit() {
//     this.getdata.doGet().subscribe(
//       (res: any) => {
//         this.data = res.articles;
//         console.log(this.data);
//       },
//       (error: any) => {
//         console.error('Error fetching news:', error);
//       }
//     );
//   }
//   mapClick(){
// this.router.navigateByUrl('/map');

//   }
// }
