import { Injectable } from '@angular/core';

@Injectable()
export class SomeService {

  constructor() { }

  getTitle(): String {
    return 'app';
  }
}
