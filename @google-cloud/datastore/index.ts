import Datastore = require('@google-cloud/datastore');
import {GCloud} from '../';

declare class Datastore {
    constructor(options?: Datastore.DataStoreConfiguration);
}

declare namespace Datastore {
    export interface DataStoreConfiguration extends GCloud.Configuration {
        apiEndpoint?: string;
        namespace?: string;
    }
}

export = Datastore;