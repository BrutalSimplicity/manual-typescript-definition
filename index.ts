import Datastore = require("./@google-cloud/datastore");

let ds = new Datastore({
    projectId: 'abcdef'
});

console.log(ds);