import { Desenvolvedor } from '../../presentation/contatos/desenvolvedor'
import BasePage from '../../presentation/shared/page-factory'

const desenvolvedor = () => {
  return (
    <BasePage
      contentPage={<Desenvolvedor />}
    />
  )
}

export default desenvolvedor
