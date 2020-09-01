import {Entity} from './entity';

export class TestStep {
    id: string;
    testcaseid: string;
    sequence: string;
    name: string;
    action: string;
    data: KeyValuePair[];
    tags: any[];
    active: boolean;
  }

interface KeyValuePair {
    key: string;
    value: string;
}
