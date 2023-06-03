import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../../Blog'

@Component({
  selector: 'app-recents-layout',
  templateUrl: './recents-layout.component.html',
  styleUrls: ['./recents-layout.component.css']
})
export class RecentsLayoutComponent implements OnInit {
  recents: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(blogs => this.recents = blogs.slice(1,5))
  }
}
