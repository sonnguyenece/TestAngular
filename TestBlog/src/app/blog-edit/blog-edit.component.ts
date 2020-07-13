import {Component, OnInit} from '@angular/core';
import {Blog} from "../blog";
import {BlogService} from "../blog.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  blog: Blog;
  blogForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    userId: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  });
   message: string;
  private blogId: any;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = params.id;
      this.blogService.getById(this.blogId).subscribe(result => {
        this.blogForm.setValue(result);
      });
    });
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const {value} = this.blogForm;
      this.blogService.updateBlog(value)
        .subscribe(next => {
          this.blogForm.reset({
            title: '',
            body: ''
          });
          this.message="SAVED!"
        }, error => console.log(error));
    }
  }
}
