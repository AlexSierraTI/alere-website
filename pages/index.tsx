import React from 'react'
import BasePage from '../presentation/shared/page-factory'

const HomePage: React.FC = () => {
  const homeMetaData: React.ReactNode = (
    <>
    </>
  )
  return (
    <BasePage
      contentPage={homeMetaData}
    />
  )
}

export default HomePage