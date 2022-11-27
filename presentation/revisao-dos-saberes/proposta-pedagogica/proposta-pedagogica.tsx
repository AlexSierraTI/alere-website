import React from 'react'
import style from './proposta-pedagogica.module.scss'
import { Image, Row, Col, Card } from 'antd'

const PropostaPedagogica: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24}>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.orangeBack}>
        <Card className={style.cardContainer}>
          <Card className={style.card}>
            <p>PROPOSTA PEDAGÓGICA</p>
          </Card>
        </Card>
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.orangeBack}>
        <Col xl={12} md={12} sm={12}>
          <Card className={style.cardItems}>
            <Row justify='center' align='middle' gutter={[16, 20]}>
              <h1>A coleção Revisão dos Saberes tem como objetivo</h1>
            </Row>
            <Row justify='center' align='middle' gutter={[16, 20]}>
              <ul>
                <li>auxiliar o estudante com dificuldades de aprendizagem.</li>
                <li>resgatar o processo de aprendizagem que a criança não vivenciou na Educação Infantil.</li>
                <li>oferecer estímulos na aquisição das habilidades propostas pela BNCC.</li>
                <li>proporcionar um trabalho interdisciplinar na construção do conhecimento.</li>
                <li>fazer interligações coesas e coerentes entre o que se aprende na escola e no cotidiano.</li>
              </ul>
            </Row>
            <Row justify='center' align='middle' gutter={[16, 20]}>
              <Col xl={24} md={24} sm={24}>
              <p>Personagens com características peculiares
                muito próximas da realidade dos alunos fazem
                parte da coleção, com o objetivo de mediar o
                processo de aprendizagem para obtenção de
                  novos conhecimentos.</p>
              </Col>
            </Row>
            <Row justify='center' align='middle' gutter={[16, 20]}>
              <Image src='/assets/criancas.png' preview={false} />
            </Row>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default PropostaPedagogica