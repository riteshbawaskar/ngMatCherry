export class Configuration {
    id: string;
    name: string;
    configtype: string;
    environment: Environment;
    appliation: string;
    config: KeyValuePair;
}

export class Environment {
    id: string;
    type: string;
    description: string;

}

interface KeyValuePair {
    key: string;
    value: string;
}
