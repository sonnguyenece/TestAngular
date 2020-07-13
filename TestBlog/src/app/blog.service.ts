import {Injectable} from '@angular/core';
import {Blog} from "./blog";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly API_URL = 'http://localhost:8080/api/blogs';
  shouldRefresh = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.API_URL);
  }

  getById(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.API_URL}/${id}`)
  }

  deleteBlog(id: number): Observable<Blog> {
    return this.http.delete<Blog>(`${this.API_URL}/${id}`)
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.API_URL,blog);
  }
  updateBlog(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(this.API_URL,blog);
  }

}
