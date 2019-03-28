import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/api/services';
import { BlogModel } from 'src/app/api/models';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.sass']
})
export class BlogPageComponent implements OnInit {

  myHelloButtonColor: string = 'danger';

  names = ['hello', 'bye', 'die'];
  blogs: BlogModel[];

  constructor(public authService: AuthService, private blogService: BlogService) {

    
  }

  helloWasClicked() {
    this.myHelloButtonColor = 'primary';
  }

  ngOnInit() {
    this.blogService.Get().subscribe(blogs => {
      this.blogs = blogs;
    }, fail => {
      alert('failed to load');
    });

    this.blogService.Post({
      title: 'hello',
      author: '',
      content: null
    }).subscribe(success => {

    }, fail => {
      console.log(fail);
    });
  }

}
