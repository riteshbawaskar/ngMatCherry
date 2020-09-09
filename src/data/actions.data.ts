import { Action } from './../models/actions';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class ActionsDataService {
    ACTIONS: Action[] = [
        {
          id: '1',
          componentId : '1',
          name: 'Crre.BookTrade',
          description: 'book trade in crre by sending tradexml',
          input: [{key: 'xml', value: ''}],
          validation : []
        },
        {
            id: '2',
            componentId : '1',
            name: 'Crre.AmendTrade',
            description: 'amend trade in crre by sending tradexml',
            input: [{key: 'xml', value: ''}],
            validation : []
          },
          {
            id: '3',
            componentId : '1',
            name: 'Crre.TerminateTrade',
            description: 'terminate in crre by sending tradexml',
            input: [{key: 'xml', value: ''}],
            validation: []
          },
          {
            id: '4',
            componentId : '1',
            name: 'Crre.VerifyReport',
            description: 'amend trade in crre by sending tradexml',
            input: [{key: 'version', value: ''}, {key: 'state', value: ''}, {key: 'Jurisdiction', value: ''}],
            validation: [{key: 'ReportType', value: 'Snapshot'}, {key: 'DTCCResponse', value: 'ACK'}, {key: 'Message', value: ''}]
          },
          {
            id: '5',
            componentId : '2',
            name: 'SDR.VerifyCSML',
            description: 'verify cree_message_in',
            input: [{key: 'version', value: ''}, {key: 'state', value: ''}, {key: 'Jurisdiction', value: ''}],
            validation: [{key: 'xml', value: ''}]
          },
          {
            id: '5',
            componentId : '2',
            name: 'SDR.VerifyFPML',
            description: 'verify dtcc_message_out',
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
