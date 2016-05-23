// setup a browser environment with jsdom

var jsdom = require("jsdom").jsdom,
    doc = jsdom(),
    win = doc.defaultView;

global.document = doc;
global.window = win;
global.navigator = { userAgent: "node.js" };
Object.keys(doc.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = doc.defaultView[property];
  }
});
