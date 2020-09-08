import { Action } from './../models/actions';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class ActionsDataService {
    ACTIONS: Action[] = [
        {
          id: '1',
          applicationId : '1',
          name: 'Crre.BookTrade',
          description: 'book trade in crre by sending tradexml',
          input: [{key: 'xml', value: ''}],
          validation : []
        },
        {
            id: '2',
            applicationId : '1',
            name: 'Crre.AmendTrade',
            description: 'amend trade in crre by sending tradexml',
            input: [{key: 'xml', value: ''}],
            validation : []
          },
          {
            id: '3',
            applicationId : '1',
            name: 'Crre.TerminateTrade',
            description: 'terminate in crre by sending tradexml',
            input: [{key: 'xml', value: ''}],
            validation: []
          },
          {
            id: '4',
            applicationId : '1',
            name: 'Crre.VerifyReport',
            description: 'amend trade in crre by sending tradexml',
            input: [{key: 'version', value: ''}, {key: 'state', value: ''}, {key: 'Jurisdiction', value: ''}],
            validation: [{key: 'ReportType', value: 'Snapshot'}, {key: 'DTCCResponse', value: 'ACK'}, {key: 'Message', value: ''}]
          },
          {
            id: '5',
            applicationId : '2',
            name: 'SDR.VerifyReport',
            description: 'verify sdr reports',
            input: [{key: 'version', value: ''}, {key: 'state', value: ''}, {key: 'Jurisdiction', value: ''}],
            validation: [{key: 'xml', value: ''}]
          }

    ];

    getData(): Observable<Action[]> {
        return of<Action[]>(this.ACTIONS);
      }

      getActionData() {
        return this.ACTIONS;
      }
}
