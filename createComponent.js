/* eslint-disable */
'use strict';

// Генератор компонентов
// Использование: node createComponent.js [имя блока]

const fs = require('fs');
const mkdirp = require('mkdirp');
const Case = require('case');

const DIR = './components';
const STYLES_IMPORT_FILENAME = './styles/styles.scss';
const name = process.argv.slice(2).join(' ');

if (!name) {
  console.error('Отмена операции: не указано имя компонента');
  return;
}

const componentName = Case.pascal(name);
const className = Case.kebab(name);
const componentDirectory = `${DIR}/${componentName}/`;
const scssImportLine = `@import '.${DIR}/${componentName}/${componentName}.scss';`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Отмена операции: директория ${componentDirectory} уже существует`);
  return;
}

mkdirp(componentDirectory).then(made => {
  console.log(`Создана директория ${componentDirectory}`);

  const jsFileContent = `// Стилевой файл импортируется в диспетчере стилей

const ${componentName} = () => {
  return (
    <div className="${className}">
      ${componentName}
    </div>
  );
};

export default ${componentName};
`;

  fs.writeFile(`${componentDirectory}${componentName}.js`, jsFileContent, (err) => {
    if (err) {
      return console.error(`Отмена операции: файл не создан`, err);
    }
    console.log(`Создан файл ${componentDirectory}${componentName}`);
  });

  const scssFileContent = `// Только БЭМ-блок ${className}, его элементы и модификаторы
// Импорт файла - в диспетчере стилей

.${className} {}
`;

  fs.writeFile(`${componentDirectory}${componentName}.scss`, scssFileContent, (err) => {
    if (err) {
      return console.error(`Отмена операции: файл не создан`, err);
    }
    console.log(`Создан файл ${componentDirectory}${componentName}`);
  });

  fs.appendFileSync(STYLES_IMPORT_FILENAME, `${scssImportLine}\n`);
});
