import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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
