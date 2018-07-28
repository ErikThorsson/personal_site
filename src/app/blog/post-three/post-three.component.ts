import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog-postTwo',
  templateUrl: './post-three.component.html',
    styleUrls: ['../blog.component.scss']})
export class PostThreeComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }
}