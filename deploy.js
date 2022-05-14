var ghpages = require('gh-pages');

ghpages.publish('out/', function(msg) {
  if (msg) console.log(msg);
});
