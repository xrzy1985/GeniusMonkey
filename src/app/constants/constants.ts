import { HttpHeaders } from '@angular/common/http';

export const arrange = 'Arrange the Deck';
export const constants = {
    dealer: {id: '', deck: []},
    dealers: [],
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer 4704d510-4333-11ed-968b-00be4349ca1c`
    }),
    paths: {
        status: 'status',
        dealers: 'dealers',
        deck: 'deck',
        shuffle: 'shuffle',
        arrange: 'arrange'
    },
    url:  'https://dealer-5wb4b3itbq-uc.a.run.app/'
}
export const name = 'James Patterson';
export const options = { headers: constants.headers };
export const selectDealer = 'Please, select a dealer.'
export const shuffle = 'Shuffle the Deck';
export const title = 'Genius Monkey Assessment';