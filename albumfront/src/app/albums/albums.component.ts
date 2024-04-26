import { Component, OnInit } from '@angular/core';
// import { Album } from '../models/album';
import { AlbumService } from '../album.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  categories!: any[];
  router: any;
  newCategoryName: string = ''; 
  CategoryId: number = 8;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  loadCategories(): void {
    // Call the service to fetch categories
    this.albumService.getCategories().subscribe(categories => {
      // Handle response
    });
  }
  deleteAlbum(categoryId: number): void {
    // Call the service to delete photo
    this.albumService.deleteAlbum(categoryId).subscribe(() => {
      // Remove the deleted photo from the array
      this.categories = this.categories.filter(category => category.id !== categoryId);
    });
  }
  // fetchMaxCategoryId(): void {
  //   this.albumService.getCategories().subscribe(categories => {
  //     if (categories.length > 0) {
  //       this.maxCategoryId = Math.max(...categories.map(category => category.id));
  //     }
  //   });
  // }
  addCategory(): void {
    if (!this.newCategoryName) { return; }

    // Obtain the ID of the last category
    const lastCategoryId = this.categories.length > 0 ? this.categories[this.categories.length - 1].id : 0;

    // Calculate the new category ID
    const newCategoryId = lastCategoryId + 1;

    // Create the new category object with the calculated ID
    const newCategory: Category = {
      name: this.newCategoryName,
      id: newCategoryId
    };

    // Send request to create new category
    this.albumService.addCategory(newCategory)
      .subscribe(newCategory => {
        // Handle successful creation
        console.log('New category added:', newCategory);
        // Optionally, you can update the list of categories or display a success message
        this.newCategoryName = ''; // Clear input field after successful addition
      });
  }
}


  // albums: any[] =[];
  // newTitle: string;

  // constructor(private albumService: AlbumService) {
  //   this.albums = [];
  //   this.newTitle = "";
  // }

  // onRefresh(): void{
  //     this.albumService.getAlbums().subscribe((albums) => {
  //       this.albums = albums.filter(album => album.id <= this.albumService.getAlbumIndex());
  //     })
  // }

  // ngOnInit(): void {
  //   this.onRefresh();
  // }

  // deleteAlbum(album: Album): void {
  //   this.albumService.deleteAlbum(album.id).subscribe(
  //     (response) => {
  //       const index = this.albums.indexOf(album);
  //       if (index !== -1) {
  //         this.albums.splice(index, 1);
  //       }
  //     }
  //   );
  // }

  // addNewAlbum(): void {
  //   if (this.newTitle === "") {
  //     return;
  //   }
    
  //   this.albumService.addAlbum({ userId: this.albums.length + 1, id: this.albums.length + 1, title: this.newTitle }).subscribe(
  //     (response) => {
  //       this.albums.push(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   this.newTitle = "";
  // }
  // addNewAlbum(): void {
  //   if (!this.newTitle.trim()) {
  //     return; // Don't add empty album
  //   }
  //   this.albumService.addAlbum({ title: this.newTitle }).subscribe(() => {
  //     this.newTitle = ''; // Clear input field
  //     this.onRefresh(); // Refresh albums list after adding album
  //   });
  // }
  // showMoreAlbums(): void{
  //   this.albumService.increaseAlbumIndex();
  //   this.onRefresh();
  // }

  // resetAlbumIndex(): void{
  //   this.albumService.resetAlbumIndex();
  // }


