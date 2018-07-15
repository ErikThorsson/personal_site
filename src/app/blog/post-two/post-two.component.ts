import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-blog-postOne',
  templateUrl: './post-two.component.html',
  styleUrls: ['./post-two.component.scss']
})
export class PostTwoComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

  getNavHeight(): object {
    // Actual space available in navigator
    const actualHeight = window.innerHeight;
    let style: Object;
    return style = { 'height': '63%', 'width': '100%'};
  }
}