import { Contato } from '../../presentation/contatos/contato'
import BasePage from '../../presentation/shared/page-factory'

const contato = () => {
  return (
    <BasePage
      contentPage={<Contato />}
    />
  )
}

export default contato
