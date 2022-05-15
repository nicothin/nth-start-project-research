const replace = require('replace-in-file');

const config = require('./config.js');
const basePath = process.env?.MODE === 'deploy' ? config.basePath : '';

const options = {
  files: [
    './out/**/*.html',
  ],
  from: [
    /<script defer="" nomodule="".+?<\/script>/g,
    /<script src=".+_next\/static\/chunks.+?defer=""><\/script>/g,
    /(<\/head>)/g,
  ],
  to: [
    '',
    '',
    `<script src="/${basePath}_next/static/chunks/common.js" defer></script><script src="/${basePath}_next/static/chunks/pages.js" defer></script>$1`,
  ],
};

replace(options)
  .then(results => {
    console.log('NextJs scripts replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
