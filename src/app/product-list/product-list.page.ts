
// import { Component, OnInit } from '@angular/core';
// import { ListService } from './list.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.page.html',
//   styleUrls: ['./product-list.page.scss'],
// })
// export class ProductListPage implements OnInit {
//   userId: number = 1;
//   data: any[] = [];
//   FilePreview: string | null = null;
//   FullScreenIndex: number | null = null;

//   constructor(private listServe: ListService) { }

//   ngOnInit() {
//     this.list();
//   }

//   list() {
//     this.listServe.showList(this.userId).subscribe((response: any) => {
//       this.data = response.data;
//     });
//   }

//   viewFullScreen(imageUrl: string, index: number) {
//     if (this.FullScreenIndex === index) {
//       this.FilePreview = null;
//       this.FullScreenIndex = null;
//     } else {
//       this.FilePreview = imageUrl;
//       this.FullScreenIndex = index;
//     }
//   }

//   closeFullScreen() {
//     this.FilePreview = null;
//     this.FullScreenIndex = null;
//   }
// }







import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  userId: number = 1;
  data: any[] = [];

  constructor(private listServe: ListService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.listServe.showList(this.userId).subscribe((response: any) => {
      console.log(response);
      // Initialize FilePreview and FullScreenIndex properties for each card
      this.data = response.data.map((card: any) => ({
        ...card,
        FilePreview: null,
        FullScreenIndex: null
      }));
    });
  
  }

  viewFullScreen(imageUrl: string, index: number) {
    // Toggle FullScreenIndex and FilePreview for the specific card
    this.data[index].FullScreenIndex = this.data[index].FullScreenIndex === null ? index : null;
    this.data[index].FilePreview = this.data[index].FilePreview === null ? imageUrl : null;
  }

  closeFullScreen(index: number) {
    // Close full screen view for the specific card
    this.data[index].FilePreview = null;
    this.data[index].FullScreenIndex = null;
  }


  async handleRefresh(event: any) {
    this.list();
      setTimeout(() => {
      
        event.target.complete();
      }, 2000);
    }


}