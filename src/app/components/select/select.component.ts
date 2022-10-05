import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// constants
import { selectDealer } from '../../constants/constants';
// interfaces
import { Dealer } from '../../interfaces/dealer';
// services
import { HttpService } from '../../services/http.service';
import { DealerService } from '../../services/dealer.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(private dealerService: DealerService, private http: HttpService) {
    this.dealers = [];
    this.selectDealer = selectDealer;
  }

  dealers: Dealer[];
  selectDealer: string;

  ngOnInit(): void {
    this.http.returnDealers().subscribe((dealers) => {
      this.dealers = dealers;
    });
  }

  getDeck(dealer: Dealer) {
    if (dealer) {
      this.http.getDealerDeck(dealer.id);
      this.dealerService.setDealerSelected(dealer);
    }
  }

}
