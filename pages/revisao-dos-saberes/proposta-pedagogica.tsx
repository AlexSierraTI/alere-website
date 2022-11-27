import { PropostaPedagogica } from '../../presentation/revisao-dos-saberes/proposta-pedagogica'
import BasePage from '../../presentation/shared/page-factory'

const propostaPedagogica = () => {
  return (
    <BasePage
      contentPage={<PropostaPedagogica />}
    />
  )
}

export default propostaPedagogica
