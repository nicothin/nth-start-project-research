var ghpages = require('gh-pages');

ghpages.publish('out/', { dotfiles: true }, (msg) => {
  if (msg) console.log(msg);
});
