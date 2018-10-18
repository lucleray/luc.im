const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

const bundleAnalyzerConfigExtra = {
  analyzerMode: 'static',
  openAnalyzer: false
}

const bundleAnalyzerConfig = {
  browser: {
    reportFilename: `../build-stats/webpack-browser.html`,
    ...bundleAnalyzerConfigExtra
  },
  server: {
    reportFilename: `../../build-stats/webpack-server.html`,
    ...bundleAnalyzerConfigExtra
  }
}

module.exports = phase =>
  withBundleAnalyzer({
    analyzeBrowser: phase === PHASE_PRODUCTION_BUILD,
    analyzeServer: phase === PHASE_PRODUCTION_BUILD,
    bundleAnalyzerConfig
  })
