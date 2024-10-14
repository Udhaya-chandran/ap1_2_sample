import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BookingService } from './booking.service';
import { VehicleService } from '../vehicle-details/vehicle.service';
import { CustomerService } from '../customer/customer.service';
import { ListCustomerService } from '../customer-list/list-customer.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  userid : any = '';
  custId : any = '';
  vehicleId : any = '';
  date: string = '';
  dealerName : any = '';
  price : any = '' ;

  vehicleData :  any[] = [];
  customerData : any[] = [];

  users_id : number = 1;
  listId : number = 1;


  selectedCustomerName: any = '';
  selectVehicleNumber: any = '';

  



  constructor( private bookingServ:BookingService,
    private vehicleService : VehicleService,
    private cusServe:ListCustomerService,
    private router:Router,
    private toastController:ToastController , private storageService:StorageService) { }

  ngOnInit() {

    this.vehiclelist();
    this.customerList();

    console.log(localStorage);


    this.storageService.get('USER_ID').then((userId) => {
      this.userid = userId; // Retrieve userId from Ionic Storage
    });
    


    this.date = new Date().toISOString(); 
  }


  book(){

    this.bookingServ.booking(this.userid,this.custId,this.vehicleId,this.date,this.dealerName,this.price).subscribe((response:any) => {
      console.log(response);

      

    if(response.status == 1 || response.status == '1'){
      const message = response.message;

      this.toast(message);
      this.userid = '';
      this.custId = '';
      this.vehicleId = '';
      this.date = '';
      this.dealerName = '';
      this.price = '';
     
    }
    else{
     const message = response.message;

     this.toast(message);

    }
    })

  }


  vehiclelist(){
    this.vehicleService.details(this.users_id).subscribe((response:any) =>{

     this.vehicleData = response. data;
    console.log(this.vehicleData);

 })

  }


  customerList(){
    this.cusServe.showList(this.listId).subscribe((response:any) => {
      this.customerData = response.data;
      console.log(this.customerData);
    })
  }

  convertToCustomerId() {
    const selectedCustomer = this.customerData.find(customer => customer.customer_name === this.selectedCustomerName);
    if (selectedCustomer) { 
      this.custId = selectedCustomer.id;
      console.log('Selected Customer:', selectedCustomer);
      console.log('Customer ID:', this.custId);
    } else {
      this.custId = ''; // Reset if not found
      console.log('Customer not found');
    }
  }
  

  convertToVehicleId() {
    const selectedVehicle = this.vehicleData.find(vehicle => vehicle.registration_number === this.selectVehicleNumber);
    if (selectedVehicle) { 
      this.vehicleId = selectedVehicle.vehicle_id;
      console.log('Selected Vehicle:', selectedVehicle);
      console.log('Vehicle ID:', this.vehicleId);
    } else {
      this.vehicleId = ''; // Reset if not found
      console.log('Vehicle not found');
    }
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

     
change(event:any){
  console.log(event);
}
  
}
