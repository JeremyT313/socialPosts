import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  showForm: boolean = false;

  posts: object[] = [
    {
      title: "me",
      thought: "Sample Thought"
    },
    {
      title: "why",
      thought: "help"
    }
  ];

  constructor() {}

  onDeleteHandler(index): void {
    this.posts.splice(index, 1);
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onSubmitHandler(newPost: object): void {
    this.posts.unshift(newPost);
    this.toggleForm();
  }

  ngOnInit() {}
}

// array -- post comp
// toggle form method
// add post method -- form comp
// delete post method -- post comp
// toggle
