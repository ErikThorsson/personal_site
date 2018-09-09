import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public innerWidth: any;

  constructor() { }

  ngOnInit() { }

    // setTextSize() {
    //     this.innerWidth = window.innerWidth;
    //     let style: Object = null;
    //     if (this.innerWidth < 650) {
    //         style = {'font-size': '36px'};
    //     }
    //     return style;
    // }
}
