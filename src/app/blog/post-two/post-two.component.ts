import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog-postTwo',
  templateUrl: './post-two.component.html',
    styleUrls: ['../blog.component.scss']})
export class PostTwoComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }
}