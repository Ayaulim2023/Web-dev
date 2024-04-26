import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Albums } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor (private client: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.client.get<Albums[]>(`${this.BASE_URL}/categories`);
  }

  getAlbum(id: number): Observable<Albums> {
    return this.client.get<Albums>(`${this.BASE_URL}/categories/${id}`);
  }

  getAlbumPhotos(id: number): Observable<any> {
    return this.client.get(`${this.BASE_URL}/categories/${id}/photos`);
  }

  createAlbum(newAlbum: Albums): Observable<Albums> {
    return this.client.post<Albums>(`${this.BASE_URL}/categories`, newAlbum);
  }

  updateAlbum(id: number, updatedAlbum: Albums): Observable<Albums> {
    return this.client.put<Albums>(`${this.BASE_URL}/categories/${id}`, updatedAlbum);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/categories/${id}`);
  }
}
