import { Component, OnInit } from '@angular/core';
import {BlogPost}            from '../../../../shared/models/blog-post';
import {DatabaseService}     from '../../../../shared/services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  readonly blogs: BlogPost[] = this.database.getPosts();

  constructor(private database: DatabaseService,
              private router: Router) { }

  editPost(postUid?: string) {
    if (postUid) {
      this.router.navigate([`/edit/${postUid}`]);
    } else {
      this.router.navigate([`/edit/`]);
    }
  }

  readPost(postUid: string) {
    this.router.navigate([`/post/${postUid}`]);
  }
}
