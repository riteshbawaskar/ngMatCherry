import { Action } from './../../../models/actions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ActionsDataService } from 'src/data/actions.data';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

   actionid: string;
   actions: Action[];
  constructor(private route: ActivatedRoute , private actionds: ActionsDataService) { }

  ngOnInit() {
   // const id = this.route.params.pipe(map(p => p.id));
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.actionid = params.get('id');
    });
    this.actions = this.actionds.getDataforComponentlib(this.actionid);
    console.log(this.actionid);
  }

}
