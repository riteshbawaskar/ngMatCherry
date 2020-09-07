import { Action } from './../models/actions';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class ActionssDataService {
    ACTIONS: Action[] = [
        {
          id: '1',
          applicationId : '1',
          action: 'Crre.BookTrade',
          description: 'book trade in crre by sending tradexml',
          input: ['xml'],
          validation : []
        },
        {
            id: '2',
            applicationId : '1',
            action: 'Crre.AmendTrade',
            description: 'amend trade in crre by sending tradexml',
            input: ['xml'],
            validation : []
          },
          {
            id: '3',
            applicationId : '1',
            action: 'Crre.TerminateTrade',
            description: 'terminate in crre by sending tradexml',
            input: ['xml'],
            validation: []
          },
          {
            id: '4',
            applicationId : '1',
            action: 'Crre.VerifyReport',
            description: 'amend trade in crre by sending tradexml',
            input: ['version', 'state', 'jurisdiction'],
            validation: ['reportType', 'RepotingStatus', 'Message']
          },
          {
            id: '5',
            applicationId : '2',
            action: 'SDR.VerifyReport',
            description: 'verify sdr reports',
            input: ['reportType', 'version', 'jurisdiction', 'state'],
            validation: ['xml']
          }

    ];

    getData(): Observable<Action[]> {
        return of<Action[]>(this.ACTIONS);
      }

      getActionData() {
        return this.ACTIONS;
      }
}
