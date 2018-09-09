import {Component, OnInit, AfterViewInit, HostListener, Input} from '@angular/core';

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
    mobile = false;
    public innerWidth: any;

    constructor() {}

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
        this.skillBoxMobile();
        if (this.innerWidth > 1000) {
            this.skillBoxDesktop();
        } else {
            this.skillBoxMobile();
            this.mobile = true;
        }
    }

    skillBoxDesktop() {
        const realsense = new SkillBox(-200, 0, true, 'Realsense', 'realsense.jpg', 'icon', false, 0)
        const java = new SkillBox(0, 0, true, 'Java', '', 'fab fa-java fa-3x', true, 1)
        const spring = new SkillBox(200, 0, true, 'Spring', 'spring.svg', 'icon', false, 2)
        this.skillBox[0] = new Array(realsense, java, spring);

        const aws = new SkillBox(-200, 100, true, 'AWS', '', 'fab fa-aws fa-3x', true, 3)
        const angular = new SkillBox(0, 100, true, 'Angular', '', 'fab fa-angular fa-3x', true, 4)
        const python = new SkillBox(200, 100, true, 'Python', '', 'fab fa-python fa-3x', true, 5)
        this.skillBox[1] = new Array(aws, angular, python);

        const mqtt = new SkillBox(-200, 200, true, 'MQTT', 'mqtt.png', 'icon', false, 6)
        const html = new SkillBox(0, 200, true, 'HTML5', '', 'fab fa-html5 fa-3x', true, 7)
        const css = new SkillBox(200, 200, true, 'CSS3', '', 'fab fa-css3 fa-3x', true, 8)
        this.skillBox[2] = new Array(mqtt, html, css);
    }

    move(skillBox: SkillBox, x_move: number, y_move: number) {
        // if (!this.mobile) {

            const elem = document.getElementById(skillBox.name);
            let x = skillBox.x;
            let y = skillBox.y;
            let xInterval = 0;
            let yInterval = 0;
            let xSign = 1;
            if (x_move < 0) {
                xSign = -1;
            }
            let ySign = 1;
            if (y_move < 0) {
                ySign = -1;
            }
            if (x_move !== 0 && y_move !== 0) {
                if (Math.abs(x_move) > Math.abs(y_move)) {
                    xInterval = Math.abs(x_move / y_move) * ySign * 5
                    yInterval = 5 * ySign;
                } else {
                    xInterval = 5 * xSign;
                    yInterval = Math.abs(y_move / x_move) * ySign * 5;
                }
            } else {
                if ( x_move === 0) {
                    if (y_move === 0) {
                        return;
                    }
                }
                if (x_move !== 0) {
                    xInterval = 5 * xSign;
                }
                if (y_move !== 0) {
                    yInterval = 5 * ySign;
                }
            }

            let xTraveled = 0;
            let yTraveled = 0;

            const interval = setInterval(() => {
                if (xTraveled >= Math.abs(x_move) && yTraveled >= Math.abs(y_move)) {
                    clearInterval(interval);
                } else {
                    x += xInterval;
                    xTraveled += Math.abs(xInterval);
                    y += yInterval;
                    yTraveled += Math.abs(yInterval);
                }
                elem.style.left = x + 'px';
                elem.style.top = y + 'px';
            }, 10);
        // }
    }

    getMoveCoords(box: SkillBox) {
        const inactive: SkillBox = this.getFirstInactivePosition();

        // if next inactive is past current index, return no move
        if (inactive.index > box.index) {
            return new Array(String(0), String(0), box.name);
        }
        const activeXStart = box.x;
        const activeYStart = box.y;
        let activeMovingRight = false;

        if (inactive.x > box.x) {
            activeMovingRight = true;
        }
        // shift the x and y coords of the inactive tile (sometimes doesn't change fast enough if currently animated)
        // used for active move calculations
        if ( this.mobile ) {
            if (inactive.index % 3 === 0) {
                inactive.x = -350;
            } else if (inactive.index % 3 === 1) {
                inactive.x = -50;
            } else if (inactive.index % 3 === 2) {
                inactive.x = 250;
            }
            if (inactive.index < 3) {
                inactive.y = 0;
            } else if (inactive.index < 6 && inactive.index > 2) {
                inactive.y = 200;
            } else if (inactive.index < 9 && inactive.index > 5) {
                inactive.y = 400;
            }
        } else {
            if (inactive.index % 3 === 0) {
                inactive.x = -200;
            } else if (inactive.index % 3 === 1) {
                inactive.x = 0;
            } else if (inactive.index % 3 === 2) {
                inactive.x = 200;
            }
            if (inactive.index < 3) {
                inactive.y = 0;
            } else if (inactive.index < 6 && inactive.index > 2) {
                inactive.y = 100;
            } else if (inactive.index < 9 && inactive.index > 5) {
                inactive.y = 200;
            }
        }

        console.log("FILTERED active: " + box.name + ' ' + box.x + ' ' + box.y + " inactive: " + inactive.name + ' ' + inactive.x + ' ' + inactive.y + ' index ' + inactive.index)
        let x = 0;
        if ( this.mobile ) {
            x = Math.abs(inactive.x - box.x);
        } else {
            x = Math.abs(inactive.x) - Math.abs(box.x);
        }
        // active moving right
        if (activeMovingRight) {
            x = Math.abs(x);
        } else if (x !== 0) {
            // left
            x = Math.abs(x) * -1;
        }
        if (x === 0) {
            x = inactive.x - box.x;
        }

        let y = Math.abs(inactive.y) - Math.abs(box.y);
        // y moving down
        if (inactive.y > box.y) {
            y = Math.abs(y);
        } else {
            // down up
            y = Math.abs(y) * -1;
        }

        const inactive_index = inactive.index;
        inactive.index = box.index;
        box.index = inactive_index;

        // now set the new inactive coords
        inactive.x = activeXStart;
        inactive.y = activeYStart;

        console.log("FINAL active: " + box.name + ' ' + box.x + ' ' + box.y +  ' index ' + box.index + " inactive: " + inactive.name + ' ' + inactive.x + ' ' + inactive.y + ' index ' + inactive.index)
        // shift inactive
        const inactiveElem = document.getElementById(inactive.name);
        inactiveElem.style.left = inactive.x + 'px';
        inactiveElem.style.top = inactive.y + 'px';

        return new Array(String(x), String(y), inactive.name);
    }

    // returns first inactive box
    getFirstInactivePosition(): SkillBox {
        let box: SkillBox = null;
        let inactiveIndex = 0;
        // find first inactive spot
        this.skillBox.forEach(skillArray => {
            skillArray.forEach((skill: SkillBox) => {
                // console.log(skill.name + ' ' + skill.active);
                if ((skill.active === false && box == null)
                    || (skill.active === false && skill.index < inactiveIndex)) {
                    box = skill;
                    // since this inactive position is being filled mark as active
                    inactiveIndex = skill.index;
                    // console.log('inactive is ' + skill.name + ' index ' + skill.index);
                }
            });
        });
        return box;
    }

    skillBoxMobile() {
        const realsense = new SkillBox(-350, 0, true, 'Realsense', 'realsense.jpg', 'icon mobile', false, 0)
        const java = new SkillBox(-50, 0, true, 'Java', '', 'fab fa-java fa-7x', true, 1)
        const spring = new SkillBox(250, 0, true, 'Spring', 'spring.svg', 'icon mobile', false, 2)
        this.skillBox[0] = new Array(realsense, java, spring);

        const aws = new SkillBox(-350, 200, true, 'AWS', '', 'fab fa-aws fa-7x', true, 3)
        const angular = new SkillBox(-50, 200, true, 'Angular', '', 'fab fa-angular fa-7x', true, 4)
        const python = new SkillBox(250, 200, true, 'Python', '', 'fab fa-python fa-7x', true, 5)
        this.skillBox[1] = new Array(aws, angular, python);

        const mqtt = new SkillBox(-350, 400, true, 'MQTT', 'mqtt.png', 'icon mobile', false, 6)
        const html = new SkillBox(-50, 400, true, 'HTML5', '', 'fab fa-html5 fa-7x', true, 7)
        const css = new SkillBox(250, 400, true, 'CSS3', '', 'fab fa-css3 fa-7x', true, 8)
        this.skillBox[2] = new Array(mqtt, html, css);
    }

    showWeb() {
        this.invis = [];
        this.setInactive('Java')
        this.setInactive('Python')
        this.setInactive('AWS')
        this.setInactive('Spring')
        this.setInactive('MQTT')
        this.setInactive('Realsense')
        this.setActive('Angular');
        this.setActive('HTML5');
        this.setActive('CSS3');

        console.log('SHOW WEB');
        let name = 'Angular';
        const angular: SkillBox = this.getSkillBox(name);
        let arr = this.getMoveCoords(angular);
        this.move(angular, Number(arr[0]), Number(arr[1]));

        name = 'HTML5';
        const html: SkillBox = this.getSkillBox(name);
        arr = this.getMoveCoords(html);
        this.move(html, Number(arr[0]), Number(arr[1]));

        name = 'CSS3';
        const css: SkillBox = this.getSkillBox(name);
        arr = this.getMoveCoords(css)
        this.move(css, Number(arr[0]), Number(arr[1]));
    }

    showBackend() {
        this.invis = [];
        this.setInactive('Angular')
        this.setInactive('HTML5')
        this.setInactive('CSS3')
        this.setInactive('MQTT')
        this.setInactive('Realsense')
        this.setActive('Java');
        this.setActive('Python');
        this.setActive('Spring');
        this.setActive('AWS');

        console.log('SHOW BACK');

        let skill: SkillBox = this.getSkillBox('Java');
        let arr = this.getMoveCoords(skill);
        this.move(skill, Number(arr[0]), Number(arr[1]));

        skill = this.getSkillBox('Python');
        arr = this.getMoveCoords(skill);
        console.log('moving pythong ' + Number(arr[0]) + ' ' +  Number(arr[1]));
        this.move(skill, Number(arr[0]), Number(arr[1]));

        skill = this.getSkillBox('Spring');
        arr = this.getMoveCoords(skill);
        this.move(skill, Number(arr[0]), Number(arr[1]));

        skill = this.getSkillBox('AWS');
        arr = this.getMoveCoords(skill);
        this.move(skill, Number(arr[0]), Number(arr[1]));
    }

    showIoT() {
        this.invis = [];
        this.setInactive('Angular')
        this.setInactive('HTML5')
        this.setInactive('CSS3')
        this.setInactive('Python')
        this.setInactive('Java')
        this.setInactive('Spring')
        this.setInactive('AWS')
        this.setActive('MQTT');
        this.setActive('Realsense');

        let skill = this.getSkillBox('MQTT');
        let arr = this.getMoveCoords(skill);
        this.move(skill, Number(arr[0]), Number(arr[1]));

        skill = this.getSkillBox('Realsense');
        arr = this.getMoveCoords(skill);
        this.move(skill, Number(arr[0]), Number(arr[1]));
    }

    showAll() {
        this.invis = [];
    }


    setInactive(name: string) {
        this.skillBox.forEach(skillArray => {
            skillArray.forEach((skill: SkillBox) => {
                if (skill.name === name) {
                    this.invis.push(name);
                    skill.active = false;
                }
            });
        });
    }

    setActive(name: string) {
        this.skillBox.forEach(skillArray => {
            skillArray.forEach((skill: SkillBox) => {
                if (skill.name === name) {
                    skill.active = true;
                }
            });
        });
    }

    isInvisible(name: string) {
        let style: Object = null;
        this.invis.forEach(skill => {
                if (skill.includes(name)) {
                    style = {'visibility': 'hidden'};
                }
            });
        return style;
    }

    getResumeScreenStyle() {
        this.innerWidth = window.innerWidth;
        let style: Object = null;
        if (this.innerWidth < 1024) {
            style = {'font-size': '200%'};
        }
        return style;
    }

    getSkillboxStyle() {
        this.innerWidth = window.innerWidth;
        // console.log(this.innerWidth);
        let style: Object = null;
        if (this.innerWidth < 1024) {
            style = {'padding-bottom': '38rem'};
        } else {
            style = {'padding-bottom': '18rem'};
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

    getSkillBox(name: string): any {
        let box: SkillBox = null;
        this.skillBox.forEach(skillArray => {
            skillArray.forEach((skill: SkillBox) => {
            if (skill.name === name) {
                box = skill;
            }
            });
        });
        return box;
    }

    getStyle(name: string) {
        let style: Object = null;
        this.skillBox.forEach(skillArray => {
            skillArray.forEach((skill: SkillBox) => {
            if (skill.name.includes(name)) {
                // console.log(name)
                style = {'position' : 'absolute', 'left' : skill.x + 'px', 'top' : skill.y + 'px'};
            }
            });
        });
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
    index: number;
    constructor(x: number, y: number, active: boolean, name: string, img: string, imgClass: string, fa: boolean, index: number) {
        this.x = x;
        this.y = y;
        this.active = active;
        this.name = name;
        this.img = img;
        this.imgClass = imgClass;
        this.fa = fa;
        this.index = index;
    }
}
