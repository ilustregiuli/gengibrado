export function loadSettings() {
  // helper para carregar os JSONs quando necessário
  const business = require('../content/settings/business.json');
  const general = require('../content/settings/general.json');
  const theme = require('../content/settings/theme.json');
  const sections = require('../content/settings/sections.json');

  return { business, general, theme, sections };
}

