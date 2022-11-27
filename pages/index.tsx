import React from 'react'
import Head from 'next/head'
import BasePage from '../presentation/shared/page-factory'
import { PoliticaDePrivacidade } from '../presentation/politica-de-privacidade'

const HomePage: React.FC = () => {
  const homeMetaData: React.ReactNode = (
    <PoliticaDePrivacidade />
  )
  return (
    <BasePage
      contentPage={homeMetaData}
    />
  )
}

export default HomePage