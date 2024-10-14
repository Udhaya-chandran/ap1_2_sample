import { Component, OnInit } from '@angular/core';
import { EditProductService } from './edit-product.service';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  userId: any = '';
  productId: any = '';
  productName: any = '';
  code: any = '';
  description: any = '';
  file: any = ''; 

  constructor(private editServ: EditProductService , private toastController:ToastController , private storageService:StorageService) { }

  ngOnInit() {

    
    this.storageService.get('USER_ID').then((userId) => {
      this.userId = userId; // Retrieve userId from Ionic Storage
    });
  }

  edi() {
    
      this.editServ.editProduct(this.userId, this.productId, this.productName, this.code, this.description, this.file).subscribe((response: any) => {
        console.log(response);
        
       if(response.status == 1 || response.status == '1'){
        const message = response.message;

        this.toast(message);
        this.userId = '';
        this.productId = '';
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
