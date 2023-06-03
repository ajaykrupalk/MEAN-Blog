import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../../Blog';

@Component({
  selector: 'app-blog-hero',
  templateUrl: './blog-hero.component.html',
  styleUrls: ['./blog-hero.component.css']
})
export class BlogHeroComponent implements OnInit {
  blog!: Blog;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const blogId = params['id'];
      this.blogService.getBlog(blogId).subscribe(blog => {
        this.blog = blog;
      });
    });
  }
}
