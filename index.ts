import * as Datastore from '@google-cloud/datastore';
import * as _ from 'lodash';


let ds = new Datastore({ projectId: 'abcdef' });

console.log(_.floor(123.3432431243, 2));
console.log(ds);