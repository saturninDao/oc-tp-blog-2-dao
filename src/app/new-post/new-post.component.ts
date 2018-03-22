import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required ]
  });
  }


    onSubmitForm() {
      const titre = this.newPostForm.value['title'];
      const contenu = this.newPostForm.value['content'];
      const loveIts = 0;
      const created_at = Date();
      this.postService.addPost(titre, contenu, loveIts, created_at);
      this.router.navigate(['/posts']);
    }

  }

