import React from 'react'
import style from './alere-play.module.scss'
import { Col, Row, Image, Carousel } from 'antd'

const AlerePlay: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24} className={style.alere_play_background} >
      <Row justify='center' align='top' gutter={[16, 20]} className={style.primary_row}>
        <Col xl={4} md={4} sm={4}>
          <Image src='/assets/alere_play_login.png' preview={false} />
        </Col>
        <Col xl={20} md={20} sm={20}>
          <Carousel autoplay={true} dotPosition='top'>
            <div>
              <Image src='/assets/alere_play_carregando.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_pessoas.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_carregando_2.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_atividades_realizadas.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_atividades_nome_turma.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_nome_professora.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_infantil_3_delta.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_infantil_4a.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_atividades_turma1.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_atividades_turma1_2.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_atividades_joao.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_agendar_atividade.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_agendar_atividade_2.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_agendar_atividade_3.png' preview={false} />
            </div>
            <div>
              <Image src='/assets/alere_play_agendar_atividade_4.png' preview={false} />
            </div>
          </Carousel>
        </Col>
      </Row>
    </Col>
  )
}

export default AlerePlay
