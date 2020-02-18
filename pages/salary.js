import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'


import { withTranslation, Link, i18n } from '../i18n'




const Salary = ({ t }) => (
    <div>
        <main>
            <Header title={t('h1')} />
            <Link href='/'>
                <button
                    type='button'
                >
                    {t('back-to-home')}
                </button>
            </Link>

            <hr />
            <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
            > Change language</button>
        </main>
        <Footer />
    </div>
)

Salary.getInitialProps = async () => ({
    namespacesRequired: ['common', 'footer'],
})



export default withTranslation('common')(Salary)

