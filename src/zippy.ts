import {Component, Input, EventEmitter} from 'angular2/core';

@Component({
    selector: 'zippy',
    events: ['open', 'close'],
    templateUrl: 'zippy.html'
})

export /**
 * Zippy
 */
class Zippy {
    @Input() title: string;
    visible: boolean;
    open;
    close;

    constructor() {
        this.visible = true;
        this.open = new EventEmitter();
        this.close = new EventEmitter();
    }

    toggle(){
        this.visible = !this.visible;
    }
}