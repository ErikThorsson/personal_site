import {Component, OnInit, AfterViewInit, HostListener, Input} from '@angular/core';
import {trigger, state, style, animate, transition, group} from '@angular/animations';
import {timer} from 'rxjs';
import {T} from '@angular/core/src/render3';

declare var test: any;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
    animations: [
    trigger('enterLeave', [
        transition('void => *', [
            // 'From' Style
            style({ opacity: 0.2, transform: 'translateX(-100%)' }),
            animate('1500ms ease-in')
        ]),
        transition('* => void', [
            animate('1500ms ease-in',
                // 'To' Style
                style({ opacity: 1, transform: 'translateX(100%)' }),
            )
        ])
        ]),
        trigger('selected', [
            // Custom selected
            state('selected',
                style({
                    // backgroundColor: 'whitesmoke',
                    // transform: 'scale(1.2)',
                }),
            ),
            transition('selected => *', [
                group([
                    // style({height: '*'}),
                    // animate('1s ease-in', style({ opacity: 1, transform: 'translateX(100%)' }))
                    // Apply pink color to the item and
                    // animate('1s ease',
                    //     style({
                    //         backgroundColor: '#ffc107'
                    //     })
                    // ),
                    // // after a second, fade it to the background
                    // animate('2s 1.5s ease',
                    //     style({
                    //         opacity: 0.2,
                    //         transform: 'scale(0.5)'
                    //     })
                    // )
                ])
            ]),
            transition('* => selected', [
                // animate('1500ms ease-in',
                //     // 'To' Style
                //     style({ opacity: 1, transform: 'translateY(50%)', transform: 'translateX(50%)' }),
                // )
                group([
                    // animate('1500ms ease-in',
                    //     // 'To' Style
                    //     style({ opacity: 1, transform: 'translateX(50%)' })),
                    // after a second, fade it to the background
                    // animate('1500ms ease-in',
                    //     // 'To' Style
                    //     style({ opacity: 1, transform: 'translateY(50%)' }))
                    animate('1s ease',
                        style({
                            transform: 'translateX(300%)',
                            width: 200,
                            // opacity: 1, transform: 'translateX(-500%)'
                        })
                    ),
                    // after a second, fade it to the background
                    animate('2s ease',
                        style({
                            transform: 'translateY(-200%)'
                        })
                    )
                ])
            ])
        ])
    ]
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
    selected = true;
    // elementState = 'selected'
    elementState = ''

    constructor() {}

    public innerWidth: any;
    public innerHeight: any;

    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.reactiveDesign();
        // this.skillBoxMobile();
        console.log(this.elementState);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.innerWidth = window.innerWidth;
        this.reactiveDesign();
    }

    reactiveDesign() {
        this.skillBoxMobile();
        // this.skillBox = new Array();
        if (this.innerWidth > 1000) {
            this.skillBoxDesktop();
        } else {
            this.skillBoxMobile();
        //     this.showIt = true;
        }
    }

    skillBoxDesktop() {
        this.RealSense = 'RealSense <img class="icon mqtt object practice move-right" src="assets/realsense.jpg" width="50">'
        this.MQTT = 'MQTT <img class="icon mqtt" src="assets/mqtt.png" width="60">'
        this.Java = 'Java <i class="fab fa-java fa-3x"></i>'
        this.Spring = 'Spring Boot <img class="icon" src="assets/spring.svg" width="50">'
        this.Angular = 'Angular 6 <i class="fab fa-angular fa-3x"</i>'
        this.AWS = 'AWS <i class="fab fa-aws fa-3x"></i>'
        this.Python = 'Python <i class="fab fa-python fa-3x"></i>'
        this.HTML5 = 'HTML5 <i class="fab fa-html5 fa-3x"></i>'
        this.CSS3 = 'CSS3 <i class="fab fa-css3 fa-3x"></i>'
        // this.skillBox[0] = new Array(this.Java, this.Python, this.Spring, this.AWS, this.RealSense);
        // this.skillBox[1] = new Array(this.Angular, this.MQTT, this.HTML5, this.CSS3);

        const realSenseBox = new SkillBox(0, 0, true, 'realsense', 'assets/realsense.jpg', 'icon', false)
        const javaBox = new SkillBox(200, 0, true, 'java', '', 'fab fa-java fa-3x', true)
        const springBox = new SkillBox(400, 0, true, 'spring', 'assets/spring.svg', 'icon', false)
        this.skillBox[0] = new Array(realSenseBox, javaBox, springBox);

        // const aws = new SkillBox(0, -100, true, 'AWS', '', 'fab fa-aws fa-3x', true)
        // this.skillBox[1] = new Array(aws);
        // this.skillBox[2] = new Array(this.MQTT, this.HTML5, this.CSS3);
    }

    move(skillBox: SkillBox, x_move: number, y_move: number) {
        const elem = document.getElementById(skillBox.name);
        console.log('moving ' + skillBox.name) + '...';
        let x = skillBox.x;
        let y = skillBox.y;
        const xStart = skillBox.x;
        const yStart = skillBox.y;
        const timer = setInterval(frame, 2);
        function frame() {
            if (x === x_move + xStart && y === y_move + yStart) {
                clearInterval(timer);
            } else {
                if (x !== x_move + xStart) {
                    if (x_move > 0) {
                        x++;
                    } else {
                        x--;
                    }
                }
                if (y !== y_move + yStart) {
                    if (y_move > 0) {
                        y++;
                    } else {
                        y--;
                    }
                }
                elem.style.left = x + 'px';
                elem.style.top = y + 'px';
                console.log(elem.style.left);
            }
        }
    }

    skillBoxMobile() {
        this.RealSense = 'RealSense <img class="icon mqtt" src="assets/realsense.jpg" width="180px">'
        this.MQTT = 'MQTT <img class="icon mqtt" src="assets/mqtt.png" width="200px">'
        this.Spring = 'Spring Boot <img class="icon" src="assets/spring.svg" width="180px">'
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
        // this.toggleState();
        this.invis = [];
        // this.invis.push('Java')
        // this.invis.push('Python')
        // this.invis.push('AWS')
        // this.invis.push('Spring')
        // this.invis.push('MQTT')
        this.invis.push('realsense')
        this.move(this.getSkillBox('java'), -200, 0);
        // this.skillBox = new Array();
        // this.skillBox[0] = new Array(this.Angular, this.HTML5, this.CSS3);
        // this.skillBox[1] = new Array(this.AWS, this.RealSense, this.MQTT);
        // this.skillBox[2] = new Array(this.Java, this.Python, this.Spring);
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
        console.log('hello!')
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
                if (skill.includes(name)) {
                    style = {'visibility': 'hidden'};
                }
            });
        // this.skillBox.forEach(skillRow => {
        //     skillRow.forEach(skill => {
        //         if (skill.active === false) {
        //             style = {'visibility': 'hidden'};
        //         }
        // });
        // });
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

    // getPadding() {
    //     this.innerWidth = window.innerWidth;
    //     let style: Object = null;
    //     if (this.innerWidth < 1000) {
    //         style = {'padding-bottom' : '14rem'};
    //     } else {
    //         style = {'padding-bottom' : '3rem'};
    //     }
    //     return style;
    // }

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

    toggleState() {
        console.log('hello');
        if (this.elementState !== 'selected') {
            this.elementState = 'selected';
        } else {
            this.elementState = '';
        }
    }

    getSkillBox(name: string): any {
        let box: SkillBox = null;
        this.skillBox[0].forEach((skill: SkillBox) => {
            console.log(skill.name);
            console.log(skill.name === name)
            if (skill.name === name) {
                box = skill;
            }
        });
        return box;
    }

    getStyle(name: string) {
        let style: Object = null;
        // this.skillBox.forEach((skillArray: Array[T]) => {
            this.skillBox[0].forEach((skill: SkillBox) => {
            if (skill.name.includes(name)) {
                style = {'position' : 'absolute', 'left' : skill.x + 'px', 'top' : skill.y + 'px'};
                    //  'top' : skill.y ,'left' : skill.x + '!important'};
                // console.log(name + ' ' + skill.x + ' ' + skill.y);
            }
            });
        // });
        return style;
    }
}

export class SkillBox {
    x: number;
    y: number;
    active: boolean;
    name: string;
    img: string;
    imgClass: string;
    fa: boolean;
    constructor(x: number, y: number, active: boolean, name: string, img: string, imgClass: string, fa: boolean) {
        this.x = x;
        this.y = y;
        this.active = active;
        this.name = name;
        this.img = img;
        this.imgClass = imgClass;
        this.fa = fa;
    }
}
