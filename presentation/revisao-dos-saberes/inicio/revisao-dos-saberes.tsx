import React from 'react'
import style from './revisao-dos-saberes.module.scss'
import { Image, Row, Col, Card } from 'antd'
import { EnvironmentOutlined, PhoneOutlined, GlobalOutlined, MailOutlined } from '@ant-design/icons'

const RevisaoDosSaberesHome: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24}>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.pinkBack}>
        <Col xl={12} md={12} sm={12}>
          <Image src='/assets/revisao_dos_saberes.png' preview={false} />
        </Col>
        <Col xl={12} md={12} sm={12}>
          <p>Uma coleção para recuperar defasagens de aprendizagem dos anos iniciais</p>
        </Col>
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.greenBack}>
        <Col xl={12} md={12} sm={12}>
          <Image src='/assets/porque_adotar.png' preview={false} />
        </Col>
        <Col xl={12} md={12} sm={12}>
          <Image src='/assets/livros.png' preview={false} />
        </Col>
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.greenBack}>
        <Card className={style.cardContainer}>
          <Card className={style.card}>
            <p>Revisa e revisita os conteúdos de forma contextualizada.</p>
            <p>Apresenta unidades temáticas por meio de personagens com características peculiares.</p>
            <p>Amplia a rede de conhecimento de forma lúdica e interativa.</p>
            <p>Oportuniza um trabalho interdisciplinar ao professor.</p>
            <p>Adequa-se a diferentes cenários de aplicação.</p>
            <p>Favorece a autonomia do professor no planejamento.</p>
          </Card>
        </Card>
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.orangeBack}>
        <Card>
          <Col xl={24} md={24} sm={24}>
            <Row justify='center' align='middle' gutter={[5, 20]}>
              <Image width={250} src='./assets/editora_lt.png' preview={false} />
            </Row>
            <Row justify='start' align='top' gutter={[5, 20]} className={style.cardContato}>
              <Col>
                <EnvironmentOutlined />
              </Col>
              <Col>
                Av. Cândido de Abreu, 651 - 11º andar - Centro Cívico
              </Col>
            </Row>
            <Row justify='start' align='top' gutter={[5, 20]} className={style.cardContato}>
              <Col>
                <PhoneOutlined />
              </Col>
              <Col>
                41 3027-5952
              </Col>
            </Row>
            <Row justify='start' align='top' gutter={[5, 20]} className={style.cardContato}>
              <Col>
                <GlobalOutlined />
              </Col>
              <Col>
                <a href='http://www.editoralt.com.br'>www.editoralt.com.br</a>
              </Col>
            </Row>
            <Row justify='start' align='top' gutter={[5, 20]} className={style.cardContato}>
              <Col>
                <MailOutlined />
              </Col>
              <Col>
                <a href='mailTo:contato@editoralt.com.br'>contato@editoralt.com.br</a>
              </Col>
            </Row>
          </Col>
        </Card>
      </Row>
    </Col>
  )
}

export default RevisaoDosSaberesHome