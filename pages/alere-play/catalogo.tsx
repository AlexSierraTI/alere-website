import { Catalogo } from '../../presentation/alere-play/catalogo'
import BasePage from '../../presentation/shared/page-factory'

const alerePlay = () => {
  return (
    <BasePage
      contentPage={<Catalogo />}
    />
  )
}

export default alerePlay
