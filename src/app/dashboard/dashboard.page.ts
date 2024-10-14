import { Component, OnInit } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  
  userId : number = 1;
  data :  any[] = [];



  constructor(private boardServ:BoardService) { }

  ngOnInit() {
    this.board();
  }

board(){
    this.boardServ.dash(this.userId).subscribe((response:any) => {
      this.data = response.data;
      console.log(this.data);
    })
  }



}













