import { Component } from '@angular/core';
// constants
import { arrange, shuffle } from '../../constants/constants';
// services
import { DealerService } from '../../services/dealer.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-buttons',
  template: `
  <div *ngIf="dealerService.isDealerSelected()">
      <button mat-raised-button color="primary" (click)="arrangeDeck(dealerService.getDealerSelected())">{{ arrange }}</button>
      <button mat-raised-button color="primary" (click)="shuffleDeck(dealerService.getDealerSelected())">{{ shuffle }}</button>
  </div>
  `,
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  constructor(public dealerService: DealerService, private http: HttpService) {
    this.arrange = arrange;
    this.show = false;
    this.shuffle = shuffle;
  }

  arrange: string;
  show: boolean;
  shuffle: string;

  arrangeDeck(dealer: string): void {
    console.log(dealer);
    this.http.arrangeDealerDeck(dealer);
  }

  shuffleDeck(dealer: string): void {
    console.log(dealer);
    this.http.shuffleDealerDeck(dealer);
  }
}
