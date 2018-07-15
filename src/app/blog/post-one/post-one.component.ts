import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog-postOne',
  templateUrl: './post-one.component.html',
    styleUrls: ['../blog.component.scss']
})
export class PostOneComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}