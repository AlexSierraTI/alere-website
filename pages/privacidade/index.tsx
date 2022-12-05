import { PoliticaDePrivacidade } from '../../presentation/politica-de-privacidade'
import BasePage from '../../presentation/shared/page-factory'

const revisaoDosSaberes = () => {
  return (
    <BasePage
      contentPage={<PoliticaDePrivacidade />}
    />
  )
}

export default revisaoDosSaberes
