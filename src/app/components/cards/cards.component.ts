import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() {
    this.dealerDeck = [];
  }

  @Input() dealerDeck: Card[];

  ngOnInit(): void {
  }

}
