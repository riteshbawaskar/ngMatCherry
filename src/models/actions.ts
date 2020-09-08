import {Entity} from './entity';

export class Action extends Entity {
    id: string;
    applicationId: string;
    name: string;
    description: string;
    input: any[];
    validation: any[];

  }