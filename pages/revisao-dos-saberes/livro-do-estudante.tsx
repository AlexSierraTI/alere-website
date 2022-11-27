import { LivroDoEstudante } from '../../presentation/revisao-dos-saberes/livro-do-estudante'
import BasePage from '../../presentation/shared/page-factory'

const livroDoEstudante = () => {
  return (
    <BasePage
      contentPage={<LivroDoEstudante />}
    />
  )
}

export default livroDoEstudante
