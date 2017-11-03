import {Component, VERSION} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello {{name}}</h1>
        <span adir>A directive changes color to green</span>
        <a-comp></a-comp>
    `,
    styles: ['']
})
export class AppComponent {
    name = `Angular! v${VERSION.full}`
}
