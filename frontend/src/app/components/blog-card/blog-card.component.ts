import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../Blog';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit{
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => this.blogs = blogs.slice(5));
  }
}
