import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  categoryId!: number; // Remove @Input() decorator
  category: any;
  photos!: any[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    // Retrieve categoryId from route parameters
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.loadCategoryAndPhotos();
    });
  }

  loadCategoryAndPhotos() {
    this.albumService.getCategory(this.categoryId).subscribe(category => {
      this.category = category;
      // Ensure categoryId is defined before making the API call
      if (this.categoryId) {
        // Call the service to fetch photos for the selected category
        this.albumService.getPhotos(this.categoryId).subscribe(photos => {
          this.photos = photos;
        });
      }
    });
  }
}
  // album: Album;
  // loaded: boolean;
  // newTitle: string;
  // onEdit: boolean;

//   constructor(private route: ActivatedRoute, private albumService: AlbumService) { 
//     // this.album = {} as Album;
//     // this.loaded = true;
//     // this.newTitle = "";
//     // this.onEdit = false;
//   }

//   ngOnInit(): void {
//     this.onRefresh();
//   }

//   startEditing(){
//     this.onEdit = true;
//     // this.onRefresh();
//   }
//   setNewTitle(): void {
//     this.albumService.updateAlbumTitle(this.album.id, this.newTitle) // Use this.newTitle instead of "newTitle"
//       .subscribe(
//         () => {
//           console.log('Album title updated successfully');
//           // Handle success if needed
//         },
//         (error: HttpErrorResponse) => { // Specify the type of error as HttpErrorResponse
//           console.error('Error updating album title:', error);
//           // Handle error if needed
//         }
//       );
// }
  // setNewTitle() {
  //   this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
  //     (response) => {
  //       this.album.title = response.title;
  //     }
  //   )
  //   this.newTitle = "";
  //   this.onEdit = false;
  // }

  // onRefresh(): void{
  //   this.route.paramMap.subscribe((params) => {
  //     let _id = params.get('id');
  //     if(_id) {
  //       let id = +_id;
  //       this.loaded = false;
  //       this.albumService.getAlbum(id).subscribe((album) => {
  //         this.album = album;
  //         this.loaded = true;
  //       })
  //     }
  //   })
  
