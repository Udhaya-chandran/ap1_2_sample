import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {


  userId: any = '';

  productName: any = '';
  code: any = '';
  description: any = '';
  file: any = ''; // Change to single File or null

  constructor(private addServ: ProductService , private toastController:ToastController ,  private storageService:StorageService) { }

  ngOnInit() {
    
    this.storageService.get('USER_ID').then((userId) => {
      this.userId = userId; // Retrieve userId from Ionic Storage
    });
  }


product() {
    
      this.addServ.addProduct(this.userId, this.productName, this.code, this.description, this.file).subscribe((response: any) => {
        console.log(response);

        
       if(response.status == 1 || response.status == '1'){
        const message = response.message;

        this.toast(message);
        this.userId = '';
        this.productName = '';
        this.code = '';
        this.description = '';
        this.file= '';
      
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
 };
  
  

  onFileSelected(event: Event) {
    const selectedFile = (event.target as HTMLInputElement).files?.[0]; // Use optional chaining
    if (selectedFile) {
      this.file = selectedFile;
    }
  }
}
