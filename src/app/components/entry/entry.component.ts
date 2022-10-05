import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
// interfaces
import { Card } from '../../interfaces/card';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {
  constructor(private http: HttpService) {
    this.http.getDealers();
    this.dealerDeck = [];
  }

  @Input() title: string = '';
  dealerDeck: Card[];

  ngOnInit(): void {
    this.http.getDeck().subscribe((deck) => {
      this.dealerDeck = deck;
    });
  }
}
