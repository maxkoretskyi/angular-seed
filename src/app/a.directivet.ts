import {Directive, HostBinding} from "@angular/core";

@Directive({
    selector: '[adir]'
})
export class ADirective {
    @HostBinding('style.color') color = 'green';
}
