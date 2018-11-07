const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withSize = require('next-size')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = phase =>
  withSize(
    withBundleAnalyzer({
      analyzeBrowser: phase === PHASE_PRODUCTION_BUILD,
      bundleAnalyzerConfig: {
        browser: {
          reportFilename: `../build-stats/webpack-browser.html`,
          analyzerMode: 'static',
          openAnalyzer: false
        }
      }
    })
  )
