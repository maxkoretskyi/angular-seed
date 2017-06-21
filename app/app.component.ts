import { Component } from '@angular/core';
import { AService } from './a.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  name = 'Angular';

  title = 'not set';

  constructor(private s: AService) {

  }

  ngOnInit(): void {
    this.s.changes.subscribe(title => this.title = title)
  }
}
