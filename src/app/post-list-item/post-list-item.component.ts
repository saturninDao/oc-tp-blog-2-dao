import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/posts.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

   @Input() postId: number;
   @Input() postTitle: string;
   @Input() postContent: string;
   @Input() postLoveIts: number;
   @Input() postCreatedAt: Date;

   posts: Post[];


  constructor(private postService: PostsService ) { }

  ngOnInit() {

  }

  onLoveit(postId) {
    this.postLoveIts += 1;
    this.postService.updateLoveIt(postId, this.postLoveIts);
    console.log(this.postLoveIts);
  }

  onDontloveit(postId) {
    this.postLoveIts -= 1;
    this.postService.updateLoveIt(postId, this.postLoveIts);
    console.log(this.postLoveIts);
  }

  onDeletePost(postId) {
    this.postService.deletePost(postId);
  }

}
