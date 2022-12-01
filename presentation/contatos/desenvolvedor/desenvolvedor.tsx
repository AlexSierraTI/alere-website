import React from 'react'
import style from './desenvolvedor.module.scss'
import { Row, Col, Card } from 'antd'
import { EnvironmentOutlined, PhoneOutlined, GlobalOutlined, MailOutlined } from '@ant-design/icons'

const Desenvolvedor: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24}>
      <Row justify='start' align='middle' gutter={[16, 20]} className={style.grayBack}>
        <Col xl={24} md={24} sm={24}>
          <Card>
            <Col xl={24} md={24} sm={24}>
              <Row justify='start' align='top' gutter={[5, 20]}>
                <Col>
                  <PhoneOutlined />
                </Col>
                <Col>
                  (11) 93801-4520
                </Col>
              </Row>
              <Row justify='start' align='top' gutter={[5, 20]}>
                <Col>
                  <MailOutlined />
                </Col>
                <Col>
                  <a href='mailTo:tecnologia@alereeditora.com.br'>tecnologia@alereeditora.com.br</a>
                </Col>
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default Desenvolvedor
