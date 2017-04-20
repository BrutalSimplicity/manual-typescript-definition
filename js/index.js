"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Datastore = require("@google-cloud/datastore");
const _ = require("lodash");
let ds = new Datastore({ projectId: 'abcdef' });
console.log(_.floor(123.3432431243, 2));
console.log(ds);
//# sourceMappingURL=index.js.map