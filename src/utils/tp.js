const Typograf = require('typograf')

const tp = new Typograf({ locale: ['ru', 'en-US'] })
tp.enableRule('common/html/url')
tp.disableRule('common/nbsp/afterShortWord')

module.exports = tp
