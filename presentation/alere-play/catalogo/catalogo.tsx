import React from 'react'
import style from './catalogo.module.scss'
import { Col, Row, Image } from 'antd'
import { useRouter } from 'next/router'
import { catalogoLivros, DadosLivro } from './livros/catalogoLivros'

const Catalogo: React.FC = () => {
  const router = useRouter()
  let conteudoLivro: DadosLivro = {
    arquivoImagem: 'blank_image.png'
  }
  const indiceLivro: any = router.query.livro 
  if (indiceLivro && catalogoLivros()[indiceLivro]) {
    conteudoLivro = catalogoLivros()[indiceLivro]
  }

  return (
    <Col xl={24} md={24} sm={24} className={style.catalogo_background}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Image src='/assets/alere_play.png' preview={false} />
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.titulo}>
        {conteudoLivro.textoTitulo}
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Col xl={12} md={12} sm={12} className={style.imagensLivro}>
          <Image src={`/assets/${conteudoLivro.arquivoImagem}`} preview={false} />
        </Col>
        <Col xl={12} md={12} sm={12} className={style.itensLivro}>
            <ul>
              {conteudoLivro.itensConteudo?.map((item, idx) => <li key={idx} className={idx % 2 ? style.corPreto : style.corLaranja}>{item} </li>)}
            </ul>
        </Col>
      </Row>
      <Row justify='center' align='middle' gutter={[16, 20]} className={style.footer}>
        {conteudoLivro.textoFooter}
      </Row>
    </Col>
  )
}

export default Catalogo
