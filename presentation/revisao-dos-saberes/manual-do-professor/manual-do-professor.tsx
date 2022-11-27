import React from 'react'
import style from './manual-do-professor.module.scss'
import { Image, Row, Col } from 'antd'

const ManualDoProfessor: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.yellowBack}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/manual_do_professor.png' preview={false} />
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.manualProfessor}>
        <h2>O Manual do professor proporciona</h2>
        <ul>
          <li>expectativas de aprendizagem durante o processo de trabalho.</li>
          <li>objetivos gerais de cada unidade temática.</li>
          <li>habilidades previstas na BNCC focadas nas atividades propostas.</li>
          <li>propostas de atividades motivacionais.</li>
          <li>orientações e encaminhamento didático para o desenvolvimento do conteúdo.</li>
          <li> dicas pedagógicas para possíveis dificuldades de aprendizagem.</li>
          <li>estratégias que atendam à necessidade de aprendizagem de cada grupo.</li>
          <li> sugestões de atividades extras na complentação do desenvolvimento do conteúdo.</li>
        </ul>
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/livros_manual_do_professor.png' preview={false} />
      </Row>
    </Col>
  )
}

export default ManualDoProfessor
