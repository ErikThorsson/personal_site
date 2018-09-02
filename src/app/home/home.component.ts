import {Component, OnInit, AfterViewInit, HostListener} from '@angular/core';

declare var test: any;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
    skillBox = new Array();
    showIt = false;
    invis: string[] = [];
    RealSense = ''
    MQTT = ''
    Java = ''
    Spring = ''
    Angular = ''
    AWS = ''
    Python = ''
    HTML5 = ''
    CSS3 = ''
    constructor() {}

    public innerWidth: any;
    public innerHeight: any;

    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.reactiveDesign();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.innerWidth = window.innerWidth;
        this.reactiveDesign();
    }

    reactiveDesign() {
        this.skillBox = new Array();
        if (this.innerWidth > 1000) {
            this.skillBoxDesktop();
        } else {
            this.skillBoxMobile();
            this.showIt = true;
        }
    }

    skillBoxDesktop() {
        this.RealSense = 'RealSense <img class="icon mqtt" src="realsense.jpg" width="50">'
        this.MQTT = 'MQTT <img class="icon mqtt" src="mqtt.png" width="60">'
        this.Java = 'Java <i class="fab fa-java fa-3x"></i>'
        this.Spring = 'Spring Boot <img class="icon" src="spring.svg" width="50">'
        this.Angular = 'Angular 6 <i class="fab fa-angular fa-3x"></i>'
        this.AWS = 'AWS <i class="fab fa-aws fa-3x"></i>'
        this.Python = 'Python <i class="fab fa-python fa-3x"></i>'
        this.HTML5 = 'HTML5 <i class="fab fa-html5 fa-3x"></i>'
        this.CSS3 = 'CSS3 <i class="fab fa-css3 fa-3x"></i>'
        this.skillBox[0] = new Array(this.Java, this.Python, this.Spring, this.AWS, this.RealSense);
        this.skillBox[1] = new Array(this.Angular, this.MQTT, this.HTML5, this.CSS3);
    }

    skillBoxMobile() {
        this.RealSense = 'RealSense <img class="icon mqtt" src="realsense.jpg" width="180px">'
        this.MQTT = 'MQTT <img class="icon mqtt" src="mqtt.png" width="200px">'
        this.Spring = 'Spring Boot <img class="icon" src="spring.svg" width="180px">'
        this.Java = 'Java <i class="fab fa-java fa-10x"></i>'
        this.Angular = 'Angular 6 <i class="fab fa-angular fa-10x"></i>'
        this.AWS = 'AWS <i class="fab fa-aws fa-10x"></i>'
        this.Python = 'Python <i class="fab fa-python fa-10x"></i>'
        this.HTML5 = 'HTML5 <i class="fab fa-html5 fa-10x"></i>'
        this.CSS3 = 'CSS3 <i class="fab fa-css3 fa-10x"></i>'
        this.skillBox[0] = new Array(this.Java, this.Python, this.Spring);
        this.skillBox[1] = new Array(this.AWS, this.RealSense, this.Angular);
        this.skillBox[2] = new Array(this.MQTT, this.HTML5, this.CSS3);
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

    getResumeScreenStyle() {
        this.innerWidth = window.innerWidth;
        let style: Object = null;
        if (this.innerWidth < 1000) {
            style = {'font-size': '200%'};
        }
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
