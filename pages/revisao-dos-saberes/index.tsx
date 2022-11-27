import { RevisaoDosSaberesHome } from '../../presentation/revisao-dos-saberes/inicio'
import BasePage from '../../presentation/shared/page-factory'

const revisaoDosSaberes = () => {
  return (
    <BasePage
      contentPage={<RevisaoDosSaberesHome />}
    />
  )
}

export default revisaoDosSaberes
