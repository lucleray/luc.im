const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = phase =>
  withBundleAnalyzer({
    analyzeBrowser: phase === PHASE_PRODUCTION_BUILD,
    bundleAnalyzerConfig: {
      browser: {
        reportFilename: `../build-stats/webpack-browser.html`,
        analyzerMode: 'static',
        openAnalyzer: false
      },
      server: {
        reportFilename: `../build-stats/webpack-server.html`,
        analyzerMode: 'static',
        openAnalyzer: false
      }
    }
  })
