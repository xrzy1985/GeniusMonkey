import { Component, Input } from '@angular/core';
// constants
import { name } from '../../constants/constants';

@Component({
  selector: 'app-toolbar',
  template: `
    <p>
      <mat-toolbar color="primary">
        <span>{{ title }}</span>
        <span class="spacer"></span>
        <span>{{ name }}</span>
      </mat-toolbar>
    </p>`,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor() {
    this.name = name;
    this.title = '';
  }

  @Input() title: string;
  name: string;
}
