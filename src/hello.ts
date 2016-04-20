import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Zippy} from './zippy';

@Component({
    selector: 'hello-app',
    template: `
        <zippy title="Details">
            <p>Here's some detailed content.</p>
        </zippy>
    `,
    directives: [Zippy]
})
export class HelloApp {
    name: string = 'World';
}

bootstrap(HelloApp);