import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
// import { Album } from '../models/album';
// import { Photo } from '../models/photo';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  categoryId!: number;
  photos!: any[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit(): void {
    // Subscribe to route parameter changes to get the categoryId
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      this.loadPhotos();
    });
  }
  loadPhotos() {
    // Call the service to fetch photos for the selected category
    this.albumService.getPhotos(this.categoryId).subscribe(photos => {
      this.photos = photos.map(photo => {
        return {
          ...photo,
          image: `assets${photo.image}` // Assuming `image` field contains the relative path to the image file
        };
      });
    });
  }
  deletePhoto(photoId: number): void {
    // Call the service to delete photo
    this.albumService.deletePhoto(photoId).subscribe(() => {
      // Remove the deleted photo from the array
      this.photos = this.photos.filter(photo => photo.id !== photoId);
    });
  }
  // loadPhotos() {
  //   // Call the service to fetch photos for the selected category
  //   this.albumService.getPhotos(this.categoryId).subscribe(photos => {
  //     this.photos = photos;
  //   });
  // }
  // album: Album;
  // photos: Photo[];

  // constructor(private route: ActivatedRoute, private albumService: AlbumService) {
  //   this.album = {} as Album;
  //   this.photos = [{}] as Photo[];
  // }

  // onRefresh(): void{
  //   this.route.paramMap.subscribe(
  //     (params) => {
  //       let _id = params.get('id');
  //       if (_id) {
  //         let id = +_id;
  //         this.albumService.getAlbum(id).subscribe(
  //           (album) => {
  //             this.album = album;
  //           }
  //         );
  //         this.albumService.getPhotos(id).subscribe(
  //           (photos) => {
  //             this.photos = photos
  //           },
  //         );
  //       }
  //     }
  //   );
  // }

  // ngOnInit(): void {
  //   this.onRefresh();
  // }

}