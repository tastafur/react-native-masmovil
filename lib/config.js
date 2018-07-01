/* eslint no-console: 0 */
const R = require('ramda');
const { join } = require('path');
const { writeFile } = require('fs');

const configDir = join(__dirname, '..', 'config');

const readConfig = (path) => {
  try {
    return require(path);
  }
  catch (error) {
    throw new Error(`No config file for path ${path}: ${error}`);
  }
};

const defaultConfig = readConfig(join(configDir, 'default.js'));
const envConfig = readConfig(join(configDir, `${process.env.RNM_BRANCH}.js`));

writeFile(`${configDir}/config.json`,
  JSON.stringify(R.mergeDeepRight(defaultConfig, envConfig)), (err) => {
    if (err) throw err;
    console.log('The config file was saved!');
  });

