import {Entity} from './entity';

export class Action extends Entity {
    applicationId: string;
    action: string;
    description: string;
    input: any[];
    validation: any[];

  }