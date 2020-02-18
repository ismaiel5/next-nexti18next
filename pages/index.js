import React from 'react'
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation, Router  } from '../i18n'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Homepage = ({ t }) => (
  <React.Fragment>
    <main>
      <Header title={t('h1')} />
      <div>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('change-locale')}
        </button>
        <Link href='/second-page'>
          <button
            type='button'
          >
            {t('to-second-page')}
          </button>
        </Link>

        <Link href='/salary'>
          <button
            type='button'
          >
            salary
          </button>
        </Link>

        <button
          onClick={() => Router.push('/salary')}
        >
          This will magically prepend locale subpaths
  </button>
      </div>
    </main>
    <Footer />
  </React.Fragment>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
