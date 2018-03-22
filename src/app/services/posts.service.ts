import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/posts.model';

@Injectable()
export class PostsService {

  private posts: Post[] = [
    {
      id: 1,
      title: 'doudou',
      content: 'magnoudewa',
      loveIts: 10,
      created_at: 'Fri Mar 10 2018 17:27:02 GMT+0000 (Temps universel coordonné)'
    }
  ];

  postsSubject = new Subject<Post[]>();


  constructor() { }

  emitPosts() {
    return this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string, loveIts: number, created_at: string ) {
    // Pour pouvoir pusher sur l'array des posts il faut que  les donnees a pusher soit de meme type
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: ''
    };
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;
    postObject.title = title;
    postObject.content = content;
    postObject.loveIts = loveIts;
    postObject.created_at = created_at;
    this.posts.push(postObject);
    this.emitPosts();
  }

  deletePost(id: number) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === id) {
        this.posts.splice(i, 1);
        break;
      }
    }
    this.emitPosts();
  }

  updateLoveIt(id: number, loveIt: number) {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === id) {
        this.posts[i].loveIts = loveIt;
        break;
      }
    }
      this.emitPosts();
  }

}
