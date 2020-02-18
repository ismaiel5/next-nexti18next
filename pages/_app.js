import React from 'react'
import App from 'next/app'
import { appWithTranslation, i18n } from '../i18n'
import { withRouter } from "next/router";


class MyApp extends App {


  render() {
    const { Component, pageProps, router } = this.props


    // i18n.changeLanguage(this.props.router.query['lang'])

    return (
      <Component {...pageProps} />
    )
  }
}

export default appWithTranslation(MyApp)
