import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Blog} from '../Blog';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiURL = `${environment.BASE_URL}/api/blogs`;

  constructor(private http:HttpClient) {
    console.log(environment.BASE_URL);
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiURL);
  }

  getBlog(id: number): Observable<Blog> {
    const url = `${this.apiURL}/${id}`
    return this.http.get<Blog>(url);
  }
}
