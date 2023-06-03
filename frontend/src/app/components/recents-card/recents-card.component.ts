import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../../Blog';

@Component({
  selector: 'app-recents-card',
  templateUrl: './recents-card.component.html',
  styleUrls: ['./recents-card.component.css']
})
export class RecentsCardComponent implements OnInit{
  @Input() recentBlog!: Blog;
  
  constructor() {}

  ngOnInit(): void {}
}
