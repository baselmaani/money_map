var en = require('./translations.en.json');
var sv = require('./translations.sv.json');
var ar = require('./translations.ar.json');

const i18n = {
  translations: {
    en,
    sv,
    ar,
  },
  defaultLang: 'sv',
  useBrowserDefault: true,
};

module.exports = i18n;
