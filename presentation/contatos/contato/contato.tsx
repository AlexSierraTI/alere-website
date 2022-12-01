import React from 'react'
import style from './contato.module.scss'
import { Row, Col, Card } from 'antd'
import { EnvironmentOutlined, PhoneOutlined, GlobalOutlined, MailOutlined } from '@ant-design/icons'

const Contato: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24}>
      <Row justify='start' align='middle' gutter={[16, 20]} className={style.grayBack}>
        <Col xl={24} md={24} sm={24}>
          <Card>
            <Col xl={24} md={24} sm={24}>
              <Row justify='start' align='top' gutter={[5, 20]}>
                <Col>
                  <EnvironmentOutlined />
                </Col>
                <Col>
                  Rua Boa Esperança, N 122 - Chácara Santo Antonio - CEP - 03408-000
                </Col>
              </Row>
              <Row justify='start' align='top' gutter={[5, 20]}>
                <Col>
                  <PhoneOutlined />
                </Col>
                <Col>
                  +55 (11) 2094-5799
                </Col>
              </Row>
              <Row justify='start' align='top' gutter={[5, 20]}>
                <Col>
                  <GlobalOutlined />
                </Col>
                <Col>
                  <a href='#'>www.alere.com.br</a>
                </Col>
              </Row>
              <Row justify='start' align='top' gutter={[5, 20]}>
                <Col>
                  <MailOutlined />
                </Col>
                <Col>
                  <a href='mailTo:contato@alere.com.br'>contato@alere.com.br</a>
                </Col>
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default Contato
