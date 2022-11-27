import { ManualDoProfessor } from '../../presentation/revisao-dos-saberes/manual-do-professor'
import BasePage from '../../presentation/shared/page-factory'

const manualDoProfessor = () => {
  return (
    <BasePage
      contentPage={<ManualDoProfessor />}
    />
  )
}

export default manualDoProfessor
