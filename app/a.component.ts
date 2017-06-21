import { Component } from '@angular/core';
import { AService } from './a.service';

@Component({
  moduleId: module.id,
  selector: 'a-comp',
  template: '<span>I am A component</span>'
})
export class AComponent {
  constructor(private s: AService) {

  }

  ngOnInit (): void {
    this.s.setTitle('hello');
  }
}
