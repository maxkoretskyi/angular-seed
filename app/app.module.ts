import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AComponent } from './a.component';
import { AService } from './a.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AComponent],
  providers: [AService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
