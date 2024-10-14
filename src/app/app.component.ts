import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements  OnInit  {
  constructor(private router: Router, private storageService: StorageService) {}

  async ngOnInit() {
    const username = await this.storageService.get("username");
    if (username) {
      this.router.navigateByUrl('/profile');
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}