import { Injectable } from '@angular/core';
// interfaces
import { Dealer } from '../interfaces/dealer';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  constructor() {
    this.dealerId = '';
    this.dealerSelected = false;;
  }

  public dealerId: string;
  public dealerSelected: boolean;

  public isDealerSelected(): boolean {
    return this.dealerSelected ?? false;
  }

  public getDealerSelected(): string {
    return this.dealerId;
  }

  public setDealerSelected(dealer: Dealer | undefined): void {
    this.dealerId = dealer?.id ?? '';
    this.dealerSelected = Boolean(dealer) ?? false;
  }
}
