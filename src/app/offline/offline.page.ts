import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@capacitor/network';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.page.html',
  styleUrls: ['./offline.page.scss'],
})
export class OfflinePage implements OnInit {
  
  
  
  
  constructor(private ngZone:NgZone,
             private router:Router,
             private storageService : StorageService) { }


    
    
  ngOnInit() {
    this.refresh(); 
  }



  async refresh() {
    const status = await Network.getStatus();
    console.log('Network status :', status);

    if (status.connected) {
      const username = await this.storageService.get("username");
      if (username === 'profile') { // Compare directly with the stored value
        this.ngZone.run(() => {
          this.router.navigateByUrl('/profile');
        });
      } else {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/home');
        });
      }
    }
  }
} 
  


             