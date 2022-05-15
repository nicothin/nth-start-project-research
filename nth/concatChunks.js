const fs = require('fs');
const concat = require('concat');

const commonFolder = './out/_next/static/chunks/';
const commonFile = `${commonFolder}common.js`;
const commonFilesList = {
  // polyfills: '',
  webpack: '',
  framework: '',
  main: '',
};
fs.readdirSync(commonFolder).forEach(file => {
  if (file.search(/\.js$/g) != -1) {
    // if (file.search(/^polyfills/g) != -1) commonFilesList.polyfills = `${commonFolder}${file}`;
    if (file.search(/^webpack/g) != -1) commonFilesList.webpack = `${commonFolder}${file}`;
    if (file.search(/^framework/g) != -1) commonFilesList.framework = `${commonFolder}${file}`;
    if (file.search(/^main/g) != -1) commonFilesList.main = `${commonFolder}${file}`;
  }
});
const commonFiles = [
  // commonFilesList.polyfills,
  commonFilesList.webpack,
  commonFilesList.framework,
  commonFilesList.main,
];
concat(commonFiles, commonFile);

const pagesFolder = './out/_next/static/chunks/pages/';
const pagesFile = `${commonFolder}pages.js`;
const pagesFiles = [];
fs.readdirSync(pagesFolder).forEach(file => {
  pagesFiles.push(`${pagesFolder}${file}`);
});
concat(pagesFiles, pagesFile);
