import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Blog} from '../Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiURL = 'http://localhost:4000/api/blogs';

  constructor(private http:HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiURL);
  }

  getBlog(id: number): Observable<Blog> {
    const url = `${this.apiURL}/${id}`
    return this.http.get<Blog>(url);
  }
}
