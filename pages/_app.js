import App from 'next/app'
import React from 'react'
import Router from 'next/router'

export default class LucApp extends App {
  static async getInitialProps(...args) {
    return App.getInitialProps(...args)
  }

  componentDidMount() {
    fetch('/analytics', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ page: Router.asPath })
    })
  }
}
