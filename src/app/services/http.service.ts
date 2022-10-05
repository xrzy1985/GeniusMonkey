import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// interfaces
import { Card } from '../interfaces/card';
import { Dealer } from '../interfaces/dealer';
import { Paths } from '../interfaces/paths';
// constants
import { constants, options } from '../constants/constants';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public deck$: BehaviorSubject<any> = new BehaviorSubject([]);
  public dealers$: BehaviorSubject<any> = new BehaviorSubject([]);

  public returnDealers(): Observable<Dealer[]> {
    return this.dealers$.asObservable();
  }

  public getDealers() {
    this.http
      .get<any>(`${constants.url}/${constants.paths.dealers}/`, options)
      .subscribe((dealers: Dealer[]) => {
        this.dealers$.next(dealers);
      }
    );
  }

  public getDeck(): Observable<Card[]> {
    return this.deck$.asObservable();
  }

  public getDealerDeck(id: string) {
    this.http
      .get<Card[]>(
        `${constants.url}/${constants.paths.dealers}/${id}/deck/`,
        options
      )
      .subscribe((resp: Card[]) => {
        this.deck$.next(resp);
      }
    );
  }

  public arrangeDealerDeck(id: string) {
    this.http
      .put<Card[]>(
        `${constants.url}/${constants.paths.dealers}/${id}/${constants.paths.arrange}/`,
        options
      )
      .subscribe((resp: Card[]) => {
        this.deck$.next(resp);
      }
    );
  }

  public shuffleDealerDeck(id: string) {
    this.http
      .put<Card[]>(
        `${constants.url}/${constants.paths.dealers}/${id}/${constants.paths.shuffle}/`,
        options
      )
      .subscribe((resp: Card[]) => {
        this.deck$.next(resp);
      }
    );
  }
}
