import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, timer} from 'rxjs';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    serverTime: number;

    constructor() { }

  ngOnInit() {
      this.serverTime = new Date().getTime();
      const source = timer(1000, 1000);
      const subscribe = source.subscribe(val => {
          console.log('hello!')
          console.log(val)
          this.serverTime = new Date().getTime();
      });
  }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }

}
