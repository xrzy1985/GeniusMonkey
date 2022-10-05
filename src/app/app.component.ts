import { Component } from '@angular/core';
// constants
import { title } from './constants/constants';
// interfaces
import { Dealer } from './interfaces/dealer';

@Component({
  selector: 'app-root',
  template: `<app-entry [title]="this.title"></app-entry>`
})
export class AppComponent {
  title = title;
}
