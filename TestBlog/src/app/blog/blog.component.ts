import {Component, OnInit} from '@angular/core';
import {BlogService} from "../blog.service";
import {Blog} from "../blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList: Blog[];
  blog: Blog;

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getAll().subscribe(next => (this.blogList = next),
      error => (this.blogList = []))
  }

  checkConfirm(i: number) {
    this.blog = this.blogList[i];
    if (confirm("Are you sure to delete id: "+this.blog.id)) {
      this.blogService.deleteBlog(this.blog.id).subscribe(() => {
        this.blogList = this.blogList.filter(t => t.id !== this.blog.id);
      })

    }
  }
}
