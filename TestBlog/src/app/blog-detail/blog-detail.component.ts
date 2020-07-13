import {Component, OnInit} from '@angular/core';
import {Blog} from "../blog";
import {BlogService} from "../blog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.blogService.getById(id).subscribe(
      next => (this.blog = next),
      error => {
        console.log(error);
        this.blog = null;
      }
    );
  }

}
