import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Post} from '../models/posts.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy  {

  // on cree la variable locale qui va recevoir les donnees du subscribe
  posts: Post[];
  // on cree le subscribe pour recuperer les contenus
  postSubscriber: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    console.log('un');
    this.postSubscriber = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        console.log('souscription reussie avec succes');
      },
      (error) => {
        console.log('Error de la souscription' + error);
      }
    );
    // il faut toujours emmettre pour mpouvoir recuperer
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postSubscriber.unsubscribe();
  }

}
