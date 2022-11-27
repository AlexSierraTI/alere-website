import React, { ReactNode } from 'react'
import { Layout, Image, Row, Col, Menu, MenuProps } from 'antd'
import { HomeOutlined, BookOutlined, ReconciliationOutlined, ContactsOutlined, DatabaseOutlined, EnvironmentOutlined } from '@ant-design/icons'
import style from './main-layout.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

const { Header, Footer, Sider, Content } = Layout

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Revisão dos Saberes', 'menuRevisaoDosSaberes', null, [
    getItem('Início', 'revisao-dos-saberes', <HomeOutlined />),
    getItem('Livro do Estudante', 'revisao-dos-saberes/livro-do-estudante', <BookOutlined />),
    getItem('Manual do Professor', 'revisao-dos-saberes/manual-do-professor', <BookOutlined />),
    getItem('Proposta Pedagógica', 'revisao-dos-saberes/proposta-pedagogica', <ReconciliationOutlined />)
  ], 'group'),
  getItem('Contatos', 'menuContact', null, [
    getItem('Contato', 'contatos/contato', <ContactsOutlined />),
    getItem('Desenvolvedores', 'contatos/desenvolvedor', <DatabaseOutlined />)
  ], 'group'),
  getItem('Política', 'menuContact', null, [
    getItem('Política de Privacidade', '', <ContactsOutlined />)
  ], 'group')
]

type Props = {
  page: ReactNode
}

const MainLayout: React.FC<Props> = ({ page }) => {
  const router = useRouter()
  const onClick: MenuProps['onClick'] = (e) => {
    router.push(`/${e.key}`)
  };

  return (
    <Layout className={style.layout}>
      <Sider className={style.sider} width={250}>
        <Col xl={24} md={24} sm={24}>
          <Link href={'/'}>
            <Row justify='center' align='middle' className={style.logo}>
              <Image width={200} src='/assets/logo.png' preview={false} />
            </Row>
          </Link>
          <Row justify='center' align='middle'>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items} />
          </Row>
        </Col>
      </Sider>
      <Layout className={style.layout}>
        <Header className={style.header}>
          Alere Editora
        </Header>
        <Content className={style.content}>
          {page}
        </Content>
        <Footer>
          <Col xl={24} md={24} sm={24}>
            <Row justify='start' align='top' gutter={[5, 20]}>
              <Col>
                <EnvironmentOutlined />
              </Col>
              <Col>
                Rua Boa Esperança, N 122 - Chácara Santo Antonio - CEP - 03408-000
              </Col>
            </Row>
          </Col>
        </Footer>
      </Layout>
    </Layout >
  )
}

export default MainLayout
