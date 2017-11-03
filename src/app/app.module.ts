import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {AComponent} from "./a.component";
import {ADirective} from "./a.directivet";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AComponent, ADirective],
    bootstrap: [AppComponent]
})
export class AppModule {
}
