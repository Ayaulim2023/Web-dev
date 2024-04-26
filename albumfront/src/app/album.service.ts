import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Album } from './models/album';
import { catchError, Observable, throwError } from 'rxjs'
import { Photo } from './models/photo';
import { Category } from './models/category';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  currentAlbumIndex: number = 10;
  currentPhotosIndex: number = 5
  constructor(private client: HttpClient) { }

  getCategories() {
    return this.client.get<any[]>('http://127.0.0.1:8000/api/categories/');

  }

  getCategory(id: number){
    return this.client.get<any[]>(`http://127.0.0.1:8000/api/categories/${id}`);
  }

  getPhotos(id: number){
    return this.client.get<any[]>(`http://127.0.0.1:8000/api/categories/${id}/photos`);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`http://127.0.0.1:8000/api/categories/${id}`);
  }
  deletePhoto(photoId: number): Observable<Photo> {
    return this.client.delete<Photo>(`http://127.0.0.1:8000/api/photos/${photoId}`);
  }
  addAlbum(body:any): Observable<any> {
    return this.client.post<any>(`http://127.0.0.1:8000/api/categories/`, body);
  }
  addCategory(category: Category): Observable<Category> {
    return this.client.post<Category>(`http://127.0.0.1:8000/api/categories/`, category);
  }
  updateCategoryName(categoryId: number, newName: string): Observable<any> {
    return this.client.put<any>(`http://127.0.0.1:8000/api/categories/${categoryId}/`, { name: newName });
  }
  // updateAlbumTitle(id: number, newTitle: string): Observable<any> {
  //   return this.client.put(`http://127.0.0.1:8000/api/categories/${id}`, { title: newTitle });
  // }

  getAlbumIndex(): number{
    return this.currentAlbumIndex;
  }
  
  increaseAlbumIndex(): void{
    this.currentAlbumIndex += 10;
  }

  resetAlbumIndex(): void{
    this.currentAlbumIndex = 10;
  }
  // addCategory(name: string): Observable<any> {
  //   return this.client.post<any>('http://127.0.0.1:8000/api/categories/', { name });
  // }
}