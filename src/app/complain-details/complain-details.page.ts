import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complain-details',
  templateUrl: './complain-details.page.html',
  styleUrls: ['./complain-details.page.scss'],
})
export class ComplainDetailsPage implements OnInit {

  userId : number = 1;
  data :  any[] = [];

  constructor(private detailService : DetailsService,
              private router:Router) { }

  ngOnInit() {

    this.details();
  }

  details(){
     this.detailService.details(this.userId).subscribe((response:any) => {
      this.data = response. data;
      console.log(this.data);
     })
  }
  // complain(){
  //   this.router.navigateByUrl('\complain')
  // }



  async handleRefresh(event: any) {
    this.details();
      setTimeout(() => {
      
        event.target.complete();
      }, 2000);
    }

}
