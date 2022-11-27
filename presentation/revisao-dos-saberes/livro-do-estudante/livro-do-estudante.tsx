import React from 'react'
import style from './livro-do-estudante.module.scss'
import { Image, Row, Col, Card } from 'antd'

const LivroDoEstudante: React.FC = () => {
  return (
    <Col xl={24} md={24} sm={24}>
      <Row justify='center' align='middle' gutter={[0, 0]} className={style.orangeBack}>
        <Col xl={8} md={8} sm={8}>
          <Row justify='end' align='middle'>
            <Image src='/assets/livro_saberes_iniciais.png' preview={false} />
          </Row>
          <Row justify='end' align='middle'>
            <div className={style.bookInfoOrange}>
              Organização: Editora LT.<br />
              ISBN: 978-65-88702-57-4<br />
              1 ed. | Formato: 20,5 x 27,5 cm<br />
              Colorido | 80 páginas <br />
            </div>
          </Row>
        </Col>
        <Col xl={16} md={16} sm={16}>
          <div className={style.bookTitleOrange}>
            Revisão dos Saberes Iniciais
          </div>
          <ul className={style.listOrange}>
            <li>Visa atender aos estudantes do 1º e 2º anos do Ensino Fundamental I.</li>
            <li>Resgata as aprendizagens essenciais previstas nas etapas finais da Educação Infantil propostas pela BNCC.</li>
            <li>Oportuniza a literacia de forma contextualizada e proficiente.</li>
            <li>Desenvolve a numeracia por meio de atividades lúdicas.</li>
          </ul>
        </Col>
      </Row>
      <Row justify='center' align='middle' gutter={[0, 0]} className={style.pinkBack}>
        <Col xl={8} md={8} sm={8}>
          <Row justify='end' align='middle'>
            <Image src='/assets/livro_saberes_da_alfabetizacao.png' preview={false} />
          </Row>
          <Row justify='end' align='middle'>
            <div className={style.bookInfoPink}>
              Organização: Editora LT.<br />
              ISBN: 978-65-88702-60-4<br />
              1 ed. | Formato: 20,5 x 27,5 cm<br />
              Colorido | 88 páginas<br />
            </div>
          </Row>
        </Col>
        <Col xl={16} md={16} sm={16}>
          <div className={style.bookTitlePink}>
            Revisão dos Saberes
            da Alfabetização
          </div>
          <ul className={style.listPink}>
            <li>Retoma e desenvolve as habilidades essenciais previstas para o 1º e 2º anos.</li>
            <li>Explora os processos de alfabetização e letramento a partir do 3º ano, a fim de superar dificuldades de aprendizagem.</li>
            <li>Favorece o trabalho lúdico e contextualizado com a linguagem.</li>
            <li>Potencializa o processo de alfabetização de forma rápida e objetiva.</li>
            <li>Proporciona de forma dinâmica a leitura e a produção textual.</li>
          </ul>
        </Col>
      </Row>
      <Row justify='center' align='middle' gutter={[0, 0]} className={style.greenBack}>
        <Col xl={8} md={8} sm={8}>
          <Row justify='end' align='middle'>
            <Image src='/assets/livro_saberes_da_matematica.png' preview={false} />
          </Row>
          <Row justify='end' align='middle'>
            <div className={style.bookInfoGreen}>
              Organização: Editora LT.<br />
              ISBN: 978-65-88702-59-8<br />
              1 ed. | Formato: 20,5 x 27,5 cm<br />
              Colorido | 80 páginas<br />
            </div>
          </Row>
        </Col>
        <Col xl={16} md={16} sm={16}>
          <div className={style.bookTitleGreen}>
            Revisão dos Saberes
            da Matemática
          </div>
          <ul className={style.listGreen}>
            <li>Desenvolve o pensamento matemático por meio de jogos e brincadeiras.</li>
            <li>Retoma e desenvolve as habilidades essenciais previstas para o 1º e 2º anos.</li>
            <li>Promove a construção do conhecimento a partir de diferentes situações.</li>
            <li>Amplia a capacidade de utilização matemática em ações cotidianas a partir do 3º ano.</li>
            <li>Relaciona observações empíricas do mundo real a representações matemáticas.</li>
          </ul>
        </Col>
      </Row>
    </Col>
  )
}

export default LivroDoEstudante