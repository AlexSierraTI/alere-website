import Head from 'next/head'
import React from 'react'
import { RevisaoDosSaberesHome } from '../revisao-dos-saberes/inicio'
import MainLayout from './main-layout'

export type Params = {
  contentPage: React.ReactNode
}
const BasePage: React.FC<Params> = ({ contentPage }) => {
  return (
    <>
      <Head>
        <title>{'Alere Website'}</title>
        <meta
          name='description'
          content={'Alere Website'}
        />
        <meta
          name='author'
          content='Alexandre'
        />
        <meta
          name='og:type'
          content='website'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <MainLayout page={contentPage} />
    </>
  )
}

export default BasePage
