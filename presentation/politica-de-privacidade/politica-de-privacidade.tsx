import React from 'react'
import style from './politica-de-privacidade.module.scss'
import { Row, Col } from 'antd'

const PoliticaDePrivacidade: React.FC = () => {
  // NOTE: Aqui são preenchidos os dados váriaveis da política de privacidade
  const nomeEmpresarial = 'Alere Editora Distribuição de Produtos e Serviços Educacionais LTDA'
  const nomeEmpresarialSimplificado = 'Alere Editora'
  const cnpj = '29.884.158/0001-53'
  const dadosPessoais = ['Nome da criança (para que os professores e gestores escolares possam acompanhar o aprendizado e engajamento)', 'Escola, série e turma da criança (para direcionar o conteúdo correto e associar à professora correta)']
  const dadosPessoaisAutomaticos = ['Páginas dos livros digitais visualizadas', 'Acertos e erros nas questões dos livros gamificados', 'Finalizações de livros', 'Informações técnicas georeferenciadas do dispositivo que está acessando']
  const comoColeta = ['A escola ou rede de ensino poderá fornecer os dados pessoais descritos no item 1.1', 'Os dados de uso (item 1.2) são coletados automaticamente pelo aplicativo']
  const meiosDeContato = ['contato@alereeditora.com.br', '+55 (11) 2094-5799']
  const nomeEncarregado = 'Leandro Antoniazzi'
  const cpfEncarregado = '269.028.628-93'
  const emailEncarregado = 'tecnologia@alereeditora.com.br'
  const dataUltimaAtualizacao = '27/11/2022'
  //

  return (
    <Col xl={24} md={24} sm={24}>
      <Row justify='center' align='middle' gutter={[16, 20]}>
        <Col xl={12} md={12} sm={12} className={style.politicaPrivacidade}>
          <Row justify='center' align='middle' gutter={[16, 20]}>
            <h2>Política de Privacidade</h2>
          </Row>
          <p>{`Na ${nomeEmpresarialSimplificado}, privacidade e segurança são prioridades e nos comprometemos com a transparência do tratamento de dados pessoais dos nossos usuários/clientes. Por isso, esta presente Política de Privacidade estabelece como é feita a coleta, uso e transferência de informações de clientes ou outras pessoas que acessam ou usam nosso site.`}</p>
          <p>Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob as normas da Constituição Federal de 1988 (art. 5º, LXXIX; e o art. 22º, XXX – incluídos pela EC 115/2022), das normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico brasileiro aplicáveis.</p>
          <p>{`Dessa forma, a ${nomeEmpresarial}, doravante denominada simplesmente como “${nomeEmpresarialSimplificado}”, inscrita no CNPJ/MF sob o nº ${cnpj}, no papel de Controladora de Dados, obriga-se ao disposto na presente Política de Privacidade.`}</p>
          <h3>1. Quais dados coletamos sobre você e para qual finalidade?</h3>
          <p>Nosso site coleta e utiliza alguns dados pessoais seus, de forma a viabilizar a prestação de serviços e aprimorar a experiência de uso.</p>
          <h4>1.1. Dados pessoais fornecidos pelo titular</h4>
          <ul className={style.listaDados}>
            {dadosPessoais.map((item, idx) => <li key={idx + 'dp'}>{item}</li>)}
          </ul>
          <h4>1.2. Dados pessoais coletados automaticamente</h4>
          <ul className={style.listaDados}>
            {dadosPessoaisAutomaticos.map((item, idx) => <li key={idx + 'dpa'}>{item}</li>)}
          </ul>
          <h3>2. Como coletamos os seus dados?</h3>
          <p>Nesse sentido, a coleta dos seus dados pessoais ocorre da seguinte forma:</p>
          <ul className={style.listaDados}>
            {comoColeta.map((item, idx) => <li key={idx + 'cc'}>{item}</li>)}
          </ul>
          <h4>2.1. Consentimento</h4>
          <p>{`É a partir do seu consentimento que tratamos os seus dados pessoais. O consentimento é a manifestação livre, informada e inequívoca pela qual você autoriza a ${nomeEmpresarialSimplificado} a tratar seus dados.`}</p>
          <p>Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados só serão coletados, tratados e armazenados mediante prévio e expresso consentimento. </p>
          <p>{`O seu consentimento será obtido de forma específica para cada finalidade acima descrita, evidenciando o compromisso de transparência e boa-fé da ${nomeEmpresarialSimplificado} para com seus usuários/clientes, seguindo as regulações legislativas pertinentes.`}</p>
          <p>{`Ao utilizar os serviços da ${nomeEmpresarialSimplificado} e fornecer seus dados pessoais, você está ciente e consentindo com as disposições desta Política de Privacidade, além de conhecer seus direitos e como exercê-los.`}</p>
          <p>A qualquer tempo e sem nenhum custo, você poderá revogar seu consentimento.</p>
          <p>É importante destacar que a revogação do consentimento para o tratamento dos dados pode implicar a impossibilidade da performance adequada de alguma funcionalidade do site que dependa da operação. Tais consequências serão informadas previamente.</p>
          <h3>3. Quais são os seus direitos?</h3>
          <p>{`A ${nomeEmpresarialSimplificado} assegura a seus usuários/clientes seus direitos de titular previstos no artigo 18 da Lei Geral de Proteção de Dados. Dessa forma, você pode, de maneira gratuita e a qualquer tempo:`}</p>
          <ul>
            <li key={1}><strong>Confirmar a existência de tratamento de dados</strong>, de maneira simplificada ou em formato claro e completo.</li>
            <li key={2}><strong>Acessar seus dados</strong>, podendo solicitá-los em uma cópia legível sob forma impressa ou por meio eletrônico, seguro e idôneo.</li>
            <li key={3}><strong>Corrigir seus dados</strong>, ao solicitar a edição, correção ou atualização destes.</li>
            <li key={4}><strong>Limitar seus dados</strong> quando desnecessários, excessivos ou tratados em desconformidade com a legislação através da anonimização, bloqueio ou eliminação.</li>
            <li key={5}><strong>Solicitar a portabilidade de seus dados</strong>{`, através de um relatório de dados cadastrais que a ${nomeEmpresarialSimplificado} trata a seu respeito.`}</li>
            <li key={6}><strong>Eliminar seus dados</strong> tratados a partir de seu consentimento, exceto nos casos previstos em lei.</li>
            <li key={7}><strong>Revogar seu consentimento</strong>, desautorizando o tratamento de seus dados.</li>
            <li key={8}><strong>Informar-se sobre a possibilidade de não fornecer seu consentimento</strong> e sobre as consequências da negativa.</li>
          </ul>
          <h3>4. Como você pode exercer seus direitos de titular?</h3>
          <p>{`Para exercer seus direitos de titular, você deve entrar em contato com a ${nomeEmpresarialSimplificado} através dos seguintes meios disponíveis:`}</p>
          <ul className={style.listaDados}>
            {meiosDeContato.map((item, idx) => <li key={idx + 'mdc'}>{item}</li>)}
          </ul>
          <p>De forma a garantir a sua correta identificação como titular dos dados pessoais objeto da solicitação, é possível que solicitemos documentos ou demais comprovações que possam comprovar sua identidade. Nessa hipótese, você será informado previamente.</p>
          <h3>5. Como e por quanto tempo seus dados serão armazenados?</h3>
          <p>{`Seus dados pessoais coletados pela ${nomeEmpresarialSimplificado} serão utilizados e armazenados durante o tempo necessário para a prestação do serviço ou para que as finalidades elencadas na presente Política de Privacidade sejam atingidas, considerando os direitos dos titulares dos dados e dos controladores.`}</p>
          <p>{`De modo geral, seus dados serão mantidos enquanto a relação contratual entre você e a ${nomeEmpresarialSimplificado} perdurar. Findado o período de armazenamento dos dados pessoais, estes serão excluídos de nossas bases de dados ou anonimizados, ressalvadas as hipóteses legalmente previstas no artigo 16 lei geral de proteção de dados, a saber:`}</p>
          <p>I – cumprimento de obrigação legal ou regulatória pelo controlador;</p>
          <p>II – estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;</p>
          <p>III – transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei; ou</p>
          <p>IV – uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.</p>
          <p>Isto é, informações pessoais sobre você que sejam imprescindíveis para o cumprimento de determinações legais, judiciais e administrativas e/ou para o exercício do direito de defesa em processos judiciais e administrativos serão mantidas, a despeito da exclusão dos demais dados.</p>
          <p>{`O armazenamento de dados coletados pela ${nomeEmpresarialSimplificado} reflete o nosso compromisso com a segurança e privacidade dos seus dados. Empregamos medidas e soluções técnicas de proteção aptas a garantir a confidencialidade, integridade e inviolabilidade dos seus dados. Além disso, também contamos com medidas de segurança apropriadas aos riscos e com controle de acesso às informações armazenadas.`}</p>
          <h3>6. O que fazemos para manter seus dados seguros?</h3>
          <p>Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e gerenciais orientadas para a proteção da sua privacidade.</p>
          <p>Aplicamos essas ferramentas levando em consideração a natureza dos dados pessoais coletados, o contexto e a finalidade do tratamento e os riscos que eventuais violações gerariam para os direitos e liberdades do titular dos dados coletados e tratados.</p>
          <p>Entre as medidas que adotamos, destacamos as seguintes:</p>
          <ul>
            <li key={9}>Apenas pessoas autorizadas têm acesso a seus dados pessoais</li>
            <li key={10}>O acesso a seus dados pessoais é feito somente após o compromisso de confidencialidade</li>
            <li key={11}>Seus dados pessoais são armazenados em ambiente seguro e idôneo.</li>
          </ul>
          <p>{`A ${nomeEmpresarialSimplificado} se compromete a adotar as melhores posturas para evitar incidentes de segurança. Contudo, é necessário destacar que nenhuma página virtual é inteiramente segura e livre de riscos. É possível que, apesar de todos os nossos protocolos de segurança, problemas de culpa exclusivamente de terceiros ocorram, como ataques cibernéticos de hackers, ou também em decorrência da negligência ou imprudência do próprio usuário/cliente.`}</p>
          <p>Em caso de incidentes de segurança que possa gerar risco ou dano relevante para você ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido, em consonância com as disposições da Lei Geral de Proteção de Dados.</p>
          <h3>7. Com quem seus dados podem ser compartilhados?</h3>
          <p>{`Tendo em vista a preservação de sua privacidade, a ${nomeEmpresarialSimplificado} não compartilhará seus dados pessoais com nenhum terceiro não autorizado. `}</p>
          <p>Seus dados poderão ser compartilhados com a gestão escolar ou da rede de ensino, assim como nossos fornecedores de tecnologia, infraestrutura e conteúdo digital.</p>
          <p>Estes recebem seus dados apenas na medida do necessário para a prestação dos serviços contratados e nossos contratos são orientados pelas normas de proteção de dados do ordenamento jurídico brasileiro.</p>
          <p>Além disso, também existem outras hipóteses em que seus dados poderão ser compartilhados, que são:</p>
          <p>I – Determinação legal, requerimento, requisição ou ordem judicial, com autoridades judiciais, administrativas ou governamentais competentes.</p>
          <p>II – Caso de movimentações societárias, como fusão, aquisição e incorporação, de forma automática</p>
          <p>{`III – Proteção dos direitos da ${nomeEmpresarialSimplificado} em qualquer tipo de conflito, inclusive os de teor judicial.`}</p>
          <h4>7.1. Transferência internacional de dados</h4>
          <p>Alguns dos terceiros com quem compartilhamos seus dados podem ser localizados ou ou possuir instalações localizadas em países estrangeiros. Nessas condições, de toda forma, seus dados pessoais estarão sujeitos à Lei Geral de Proteção de Dados e às demais legislações brasileiras de proteção de dados</p>
          <p>{`Nesse sentido, a ${nomeEmpresarialSimplificado} se compromete a sempre adotar eficientes padrões de segurança cibernética e de proteção de dados, nos melhores esforços de garantir e cumprir as exigências legislativas.`}</p>
          <p>Ao concordar com essa Política de Privacidade, você concorda com esse compartilhamento, que se dará conforme as finalidades descritas no presente instrumento.</p>
          <h3>8. Alteração desta Política de Privacidade</h3>
          <p>A atual versão da Política de Privacidade foi formulada e atualizada pela última vez em: {dataUltimaAtualizacao}.</p>
          <p>Reservamos o direito de modificar essa Política de Privacidade a qualquer tempo, principalmente em função da adequação a eventuais alterações feitas em nosso site ou em âmbito legislativo. Recomendamos que você a revise com frequência.</p>
          <p>Eventuais alterações entrarão em vigor a partir de sua publicação em nosso site e sempre lhe notificaremos acerca das mudanças ocorridas.</p>
          <p>Ao utilizar nossos serviços e fornecer seus dados pessoais após tais modificações, você as consente.</p>
          <h3>9. Responsabilidade</h3>
          <p>{`A ${nomeEmpresarialSimplificado} prevê a responsabilidade dos agentes que atuam nos processos de tratamento de dados, em conformidade com os artigos 42 ao 45 da Lei Geral de Proteção de Dados.`}</p>
          <p>Nos comprometemos em manter esta Política de Privacidade atualizada, observando suas disposições e zelando por seu cumprimento.</p>
          <p>Além disso, também assumimos o compromisso de buscar condições técnicas e organizativas seguramente aptas a proteger todo o processo de tratamento de dados.</p>
          <p>Caso a Autoridade Nacional de Proteção de Dados exija a adoção de providências em relação ao tratamento de dados realizado pela {nomeEmpresarialSimplificado}, comprometemo-nos a segui-las.</p>
          <h4>9.1 Isenção de responsabilidade</h4>
          <p>Conforme mencionado no Tópico 6, embora adotemos elevados padrões de segurança a fim de evitar incidentes, não há nenhuma página virtual inteiramente livre de riscos. Nesse sentido, a {nomeEmpresarialSimplificado} não se responsabiliza por:</p>
          <p>I – Quaisquer consequências decorrentes da negligência, imprudência ou imperícia dos usuários em relação a seus dados individuais. Garantimos e nos responsabilizamos apenas pela segurança dos processos de tratamento de dados e do cumprimento das finalidades descritas no presente instrumento.</p>
          <p>Destacamos que a responsabilidade em relação à confidencialidade dos dados de acesso é do usuário.</p>
          <p>II – Ações maliciosas de terceiros, como ataques de hackers, exceto se comprovada conduta culposa ou deliberada da {nomeEmpresarialSimplificado}.</p>
          <p>Destacamos que em caso de incidentes de segurança que possam gerar risco ou dano relevante para você ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido e cumpriremos as providências necessárias.</p>
          <p>III – Inveracidade das informações inseridas pelo usuário/cliente nos registros necessários para a utilização dos serviços da {nomeEmpresarialSimplificado}; quaisquer consequências decorrentes de informações falsas ou inseridas de má-fé são de inteiramente responsabilidade do usuário/cliente.</p>
          <h3>10. Encarregado de Proteção de Dados</h3>
          <p>A {nomeEmpresarialSimplificado} disponibiliza os seguintes meios para que você possa entrar em contato conosco para exercer seus direitos de titular: {meiosDeContato.join(' ')}</p>
          <p>Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, você pode entrar em contato com o nosso Encarregado de Proteção de Dados Pessoais, através dos seguintes canais:</p>
          <p>{nomeEncarregado} ({cpfEncarregado})</p>
          <p><a href={`mailTo:${emailEncarregado}`}>{emailEncarregado}</a></p>
        </Col>
      </Row>

    </Col>
  )
}

export default PoliticaDePrivacidade
