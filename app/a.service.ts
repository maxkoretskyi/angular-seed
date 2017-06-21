import { Subject } from 'rxjs/Subject';

export class AService {
  changes = new Subject<string>();

  constructor() {

  }

  setTitle(p) {
    this.changes.next(p);
  }

}

