const jsdom = require('jsdom');
const exposedProperties = ['window', 'navigator', 'document'];
const { JSDOM } = jsdom;
global.document = new JSDOM('');
global.window = document.defaultView;

global.navigator = {
  userAgent: 'node.js'
};