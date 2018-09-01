import {Component, OnInit, AfterViewInit} from '@angular/core';

declare var test: any;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
    RealSense = 'RealSense <img class="icon mqtt" src="realsense.jpg" width="50">'
    MQTT = 'MQTT <img class="icon mqtt" src="mqtt.png" width="60">'
    Java = 'Java <i class="fab fa-java fa-3x"></i>'
    Spring = 'Spring Boot <img class="icon" src="spring.svg" width="50">'
    Angular = 'Angular 6 <i class="fab fa-angular fa-3x"></i>'
    AWS = 'AWS <i class="fab fa-aws fa-3x"></i>'
    Python = 'Python <i class="fab fa-python fa-3x"></i>'
    HTML5 = 'HTML5 <i class="fab fa-html5 fa-3x"></i>'
    CSS3 = 'CSS3 <i class="fab fa-css3 fa-3x"></i>'
    skillBox = new Array();
    showIt = false;
    invis: string[] = [];

    constructor() {}

    ngOnInit() {
        this.skillBox[0] = new Array(this.Java, this.Python, this.Spring, this.AWS, this.RealSense);
        this.skillBox[1] = new Array(this.Angular, this.MQTT, this.HTML5, this.CSS3);
    }

    showWeb() {
        this.invis = [];
        this.invis.push('Java')
        this.invis.push('Python')
        this.invis.push('AWS')
        this.invis.push('Spring')
        this.invis.push('MQTT')
        this.invis.push('RealSense')
    }

    showBackend() {
        this.invis = [];
        this.invis.push('Angular')
        this.invis.push('HTML5')
        this.invis.push('CSS3')
        this.invis.push('MQTT')
        this.invis.push('RealSense')
    }

    showIoT() {
        this.invis = [];
        this.invis.push('Java')
        this.invis.push('Python')
        this.invis.push('AWS')
        this.invis.push('Spring')
        this.invis.push('Angular')
        this.invis.push('HTML5')
        this.invis.push('CSS3')
    }

    showAll() {
        this.invis = [];
    }

    isInvisible(name: string) {
        let style: Object = null;
        this.invis.forEach(skill => {
            if (name.includes(skill)) {
                style = {'visibility': 'hidden'};
            }
        });
        return style;
    }


    ngAfterViewInit() {
         // new test();
    }


    showResume() {
        if (!this.showIt) {
            this.showIt = true;
        } else {
            this.showIt = false;
        }
    }
}
