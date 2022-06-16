const { injectAxe, checkA11y } = require('axe-playwright');

module.exports = {
  async preRender(page, _) {
    await injectAxe(page);
  },
  async postRender(page, _) {
    await checkA11y(page, '#root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};