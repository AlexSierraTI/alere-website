export interface DadosLivro {
  textoTitulo?: string,
  itensConteudo?: string[],
  textoFooter?: string,
  arquivoImagem?: string,
}

const makeLivro = (
  textoTitulo: string,
  itensConteudo: string[],
  textoFooter: string,
  arquivoImagem: string
): DadosLivro => {
  const result: DadosLivro = {
    textoTitulo,
    itensConteudo,
    textoFooter,
    arquivoImagem
  }
  return result
}

export const catalogoLivros = (): DadosLivro[] => {
  const livros: DadosLivro[] = []
  const ei3Anos = makeLivro('LIVRO DIGITAL - EI - 3 ANOS', [
    '1 - Corpo Humano',
    '2 - Minha família',
    '3 - Cômodos da casa',
    '4 - Moradias',
    '5 - Jogo do equilibrista',
    '6 - Jogo de montar o circo',
    '7 - Conhecendo os animais',
    '8 - Cores',
    '9 - Rotina: dia e noite',
    '10 - Conhecendo os sentidos do corpo',
    '11 - Cuidando do corpo',
    '12 - Frutas 1',
    '13 - Como nascem os seres vivos?',
    '14 - Conhecendo a letra A',
    '15 - Qual letra começa?',
    '16 - Animais do mar',
    '17 - Cachorros',
    '18 - Aprendendo as características dos bichos',
    '19 - Trava-línguas',
    '20 - Jogo das letras',
    '21 - Alimentos saudáveis e não saudáveis 1',
    '22 - Historinhas infantis',
    '23 - Localização: acima/abaixo dentro/fora',
    '24 - Meios de transporte - quantidades 1',
    '25 - Trânsito',
    '26 - Aprendendo com o trânsito',
    '27 - Acertando os acessórios das profissões',
    '28 - Nomes próprios',
    '29 - Contando pontos',
    '30 - Montando casinhas',
    '31 - Cores 2',
    '32 - Letras e números',
    '33 - Chuva e sol 1',
    '34 - Mira certa e letra inicial',
    '35 - Frutas - quantidades',
    '36 - São frutas ou não são frutas',
    '37 - Brinquedos e não brinquedos',
    '38 - Nomes próprios - quantidades',
    '39 - Brinquedos e brincadeiras 1',
    '40 - Mina dos números',
  ],
    '+ 40 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ei_3anos.png'
  )

  const ei4Anos = makeLivro('LIVRO DIGITAL - EI - 4 ANOS', [
    '1 - Nomes próprios - quantidades',
    '2 - Quantidades',
    '3 - Quantas letras?',
    '4 - Completando os nomes dos animais',
    '5 - Expressões 1',
    '6 - Materiais escolares',
    '7 - Aprendendo as características dos bichos',
    '8 - Conhecendo a letra F',
    '9 - Cômodos da casa',
    '10 - Completando os nomes dos brinquedos',
    '11 - Tabuleiro das cores',
    '12 - Descobrindo brincadeiras: pipa',
    '13 - Escalada do adivinha',
    '14 - Aprendendo com o trânsito',
    '15 - Trânsito',
    '16 - Jogo do corpo humano',
    '17 - Contando pontos',
    '18 - Opostos: maior/menor alto/baixo',
    '19 - Brinquedos e brincadeiras',
    '20 - Pequeno e grande',
    '21 - Opostos: curto/comprido largo/estreito',
    '22 - Descobrindo brincadeiras: futebol',
    '23 - A mina da rima',
    '24 - Alimentos saudáveis e não saudáveis',
    '25 - Cuidando do corpo',
    '26 - Rotina: dia e noite',
    '27 - Escalada dos personagens infantis',
    '28 - Números 1',
    '29 - Vogais dos animais',
    '30 - Fazendinha da rima',
    '31 - Animais domésticos e selvagens',
    '32 - Escalada dos alimentos dos animais',
    '33 - Historinhas infantis',
    '34 - Uso da água',
    '35 - Sequência númerica',
    '36 - Chuva e sol',
    '37 - Fundo do mar',
    '38 - Animais do mar',
    '39 - Conhecendo a letra P',
    '40 - Futebol da aliteração',
    '41 - Conhecendo a letra N',
    '42 - Sequência numérica 1',
    '43 - Sequência numérica 2',
    '44 - Aprendendo as características pessoais',
    '45 - Explorando o meio ambiente',
    '46 - Poluição do rio',
    '47 - Vamos reciclar!',
    '48 - Descobrindo lugares: natureza',
    '49 - Jogo do equilibrista',
    '50 - Objeto das profissões',
    '51 - Letras e números',
    '52 - Sequência - quantidades',
    '53 - Formas geométricas',
    '54 - Lagoa da aliteração',
    '55 - Cores 2',
    '56 - Localização',
    '57 - Festa junina',
    '58 - Escalada das profissões',
    '59 - Aventura do dinheiro',
    '60 - Alimentos frios e quentes',
    '61 - Acerte as letras',
    '62 - Aprendendo rimas',
    '63 - Escalada dos nomes próprios',
    '64 - Descobrindo com o sorvete',
    '65 - Frutas - quantidades',
    '66 - Meios de transportes - quantidades',
    '67 - Meios de transportes',
    '68 - Descobrindo lugares: sala de aula 2',
    '69 - Acima e abaixo',
    '70 - Meios de comunicação',
  ],
    '+ 70 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ei_4anos.png'
  )

  const ei5Anos = makeLivro('LIVRO DIGITAL - EI - 5 ANOS', [
    '1 - Nomes próprios - quantidade',
    '2 - Quantas letras?',
    '3 - A mina da rima',
    '4 - Quantidades',
    '5 - Palavras e imagens',
    '6 - Uso da água',
    '7 - Brinquedos e brincadeiras',
    '8 - Descobrindo brincadeiras: futebol',
    '9 - Letras dos esportes',
    '10 - Cuidando do corpo',
    '11 - Escalada do adivinha',
    '12 - Formas geométricas',
    '13 - Cômodos da casa (capa com várias casinhas)',
    '14 - Descobrindo lugares: fazenda',
    '15 - Comidas juninas - quantidade',
    '16 - Comidas típicas 2',
    '17 - Festa junina',
    '18 - Historinhas infantis',
    '19 - Mina dos números',
    '20 - Fazendinha da rima',
    '21 - Sequência numérica',
    '22 - Acerte as letras',
    '23 - Antes e depois',
    '24 - Vamos reciclar!',
    '25 - Quantidades',
    '26 - Completando os nomes dos animais',
    '27 - Limpe o rio',
    '28 - Sequência - quantidades',
    '29 - Aprendendo as características dos bichos',
    '30 - Brinquedos e brincadeiras',
    '31 - Opostos: maior/menor alto/baixo',
    '32 - Estações do ano',
    '33 - Aprendendo rimas',
    '34 - Alimentos saudáveis e não saudáveis',
    '35 - Acertando a soma 1',
    '36 - Frutas 2',
    '37 - Escalada dos personagens infantis',
    '38 - Expressões 2',
    '39 - Sequência numérica',
    '40 - Sequência numérica 2',
    '41 - Números 20 a 30',
    '42 - Opostos: curto/comprido largo/estreito',
    '43 - Animais domésticos e selvagens',
    '44 - Rua',
  ],
    '+ 44 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ei_5anos.png'
  )

  const ef1AnoLinguagem = makeLivro('LIVRO DIGITAL - EF - 1° ANO - LINGUAGEM', [
    '1 - Nomes próprios',
    '2 - Brincando com as palavras',
    '3 - Folheto informativo: coronavírus',
    '4 - Fábula 1',
    '5 - Escrevendo Palavras',
    '6 - Mundo animal',
    '7 - Brincadeiras de ontem e hoje',
    '8 - Contando palavras',
    '9 - Brinquedos e Brincadeiras',
    '10 - História em Quadrinhos',
    '11 - Juntando as partes 1',
    '12 - Juntando as partes 2',
    '13 - Lista: aprendendo ordem alfabética',
    '14 - Ordenando Palavras',
    '15 - Escalada das rimas',
    '16 - Troca - letras do Conto João e o pé de feijão',
    '17 - Escrevendo Palavras 2',
    '18 - Adivinha',
    '19 - Som do I e E nas palavras',
    '20 - Rima',
    '21 - Uso do R / RR',
    '22 - Brincando de detetive: parlendas',
    '23 - Trava - língua: separando sílabas',
    '24 - Sinais da pontuação',
    '25 - Corta - palavras',
    '26 - Cubo das palavras',
    '27 - Texto Instrucional: dobradura de papel',
    '28 - De olho nas palavras: f / v e p / b',
    '29 - Flores',
    '30 - Escaladão das palavras',
    '31 - Desafio dos bichos',
    '32 - Fazendinha da rima',
    '33 - Brincadeiras cantadas',
    '34 - Detetive das sílabas',
    '35 - Escrevendo palavras: contos infantis',
    '36 - Formando palavras',
    '37 - Bob em: aventura da pontuação',
    '38 - De olho nas palavras: d / t e c / g',
    '39 - Invertendo as sílabas',
  ],
    '+ 39 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_1ano_linguagem.png'
  )

  const ef1AnoMatematica = makeLivro('LIVRO DIGITAL - EF - 1° ANO - MATEMÁTICA', [
    '1 - Quantidades',
    '2 - Vamos brincar de contar ?',
    '3 - Figuras geométricas planas 1',
    '4 - Vamos reciclar ? !',
    '5 - Futebol dos conjuntos',
    '6 - Números: antes, depois e sequência',
    '7 - Acertando a soma 1',
    '8 - Vamos jogar: subtração',
    '9 - Posicionamento',
    '10 - Sequência e percurso',
    '11 - Calendário do Beto',
    '12 - Localização na malha 2',
    '13 - Praia',
    '14 - Sólidos Geométricos',
    '15 - Formas espaciais no cotidiano',
    '16 - Calendário do Bob',
    '17 - Aprendendo com os gráficos',
    '18 - Aprendendo com as horas',
    '19 - Futebol dos números: dezena',
    '20 - Jogo da decomposição',
    '21 - Bob e a aventura do dinheiro',
    '22 - Problemas envolvendo dinheiro',
    '23 - Detetive das medidas 1',
    '24 - Formas geométricas no cotidiano',
    '25 - Sequência Numérica: 10 a 100',
    '26 - Jogo da simetria 1',
    '27 - Aprendendo com gráficos e tabelas',
    '28 - Jogo da metade e dobro',
  ],
    '+ 28 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_1ano_matematica.png'
  )

  const ef2AnoLinguagem = makeLivro('LIVRO DIGITAL - EF - 2° ANO - LINGUAGEM', [
    '1 - Símbolos, letras e números',
    '2 - Ordenando palavras',
    '3 - Lista: aprendendo ordem alfabética',
    '4 - Texto Instrucional: Dobradura de papel',
    '5 - Bula de remédio',
    '6 - Sílabas mágicas',
    '7 - Texto instrucional: Como lavar bem as mãos',
    '8 - Lagoa das sílabas 2',
    '9 - Regras do jogo: dominó',
    '10 - Escrevendo palavras: contos infantis',
    '11 - João e o pé de feijão',
    '12 - Conto João e Maria: juntando sílabas e tamanho',
    'das palavras',
    '13 - História em quadrinhos',
    '14 - Poema e rima',
    '15 - Poema: A mina da rima',
    '16 - Convite: aprendendo a separar sílabas',
    '17 - Um encontro diferente: aprendendo dígrafo',
    '18 - Aprendendo a escrever: Uso do h',
    '19 - Receita culinária e cardápio',
    '20 - Aprendendo a escrever M antes de P e B',
    '21 - Formando palavras',
    '22 - Jogo do des, in, im',
    '23 - Desafio 2: dicionário',
    '24 - Ordenando palavras 2',
    '25 - Brincadeiras de ontem e de hoje 2',
    '26 - Adicionando sílabas',
    '27 - De olho nas palavras 2: com f / v, p / b e t / d',
    '28 - Formação de palavras e ão, inho e zinho',
    '29 - Instruções de brincadeiras',
    '30 - Encontro Consonantal',
    '31 - Sinais de pontuação',
    '32 - Linha do tempo',
    '33 - Detetive das sílabas',
    '34 - Poema visual',
    '35 - Translineação',
    '36 - Legenda para fotos',
    '37 - Termina com I ou com E ?',
    '38 - Será que termina com O ou com U ?',
    '39 - Campanha da Conscientização',
    '40 - Tempo e lugar',
    '41 - Noticia',
  ],
    '+ 41 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_2ano_linguagem.png'
  )

  const ef2AnoMatematica = makeLivro('LIVRO DIGITAL - EF - 2° ANO - MATEMÁTICA', [
    '1 - Futebol dos conjuntos',
    '2 - Números: antes, depois e sequência',
    '3 - Futebol dos números: dezena',
    '4 - Futebol dos números: centena, dezena, unidade',
    '5 - Sistema de numeração decimal 2',
    '6 - Bob e a aventura do dinheiro',
    '7 - Vamos jogar: soma e subtração',
    '8 - Problemas envolvendo dinheiro',
    '9 - Acertando a soma 1',
    '10 - Futebol da subtração',
    '11 - Aprendendo com os gráficos e tabelas',
    '12 - Calendário do Beto',
    '13 - Aprendendo com o tempo',
    '14 - Detetive das medidas 1',
    '15 - Acertando a soma 2',
    '16 - Bob e a subtração 2',
    '17 - Detetive das medidas 2',
    '18 - Localização na malha',
    '19 - Formas espaciais no cotidiano',
    '20 - Formas espaciais 1',
    '21 - Aprendendo com os dados',
    '22 - Classe e ordem dos números - 3º ordem',
    '23 - Vamos somar! 20 a 50',
    '24 - Subtração',
    '25 - Jogo da decomposição',
    '26 - Sequência numérica: números pares, ímpares, crescente e decrescente',
    '27 - Aprendendo com o tempo 2',
    '28 - Figuras geométricas planas',
    '29 - Diversão com tangram',
    '30 - Números: metade, dobro, triplo e quádruplo',
    '31 - Números: metade, dobro, dúzia e meia dúzia',
    '32 - Detetive das medidas 3: com operações',
    '33 - Localização na malha - quadriculada',
    '34 - Gráfico e tabela: soma e subtração',
    '35 - Uma aventura com as centenas, dezenas e unidades',
    '36 - É caro ou barato ?',
    '37 - Moedas brasileiras',
    '38 - Cédulas Brasileiras',
    '39 - Problemas envolvendo dinheiro 2',
  ],
    '+ 39 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_2ano_matematica.png'
  )

  const ef3AnoLinguagem = makeLivro('LIVRO DIGITAL - EF - 3° ANO - LINGUAGEM', [
    '1 - Palavras com G e J',
    '2 - Instrução de confecção',
    '3 - Mina da Escrita: palavras com C e Qu',
    '4 - Diário Pessoal',
    '5 - Jogo dos Pronomes',
    '6 - Corta palavras R e RR',
    '7 - Corta palavras S e SS',
    '8 - S ou Z',
    '9 - Trava - língua: separando sílabas',
    '10 - Carta',
    '11 - Caça - adjetivo',
    '12 - Jogo da Pontuação',
    '13 - Sílaba misteriosa: lendas',
    '14 - Sinais de pontuação',
    '15 - Tirinha: verbos',
    '16 - História em quadrinhos',
    '17 - Rimas nas quadrinhas',
    '18 - Lagoa das sílabas 2',
    '19 - Detetive das sílabas',
    '20 - Escalada das rimas',
    '21 - Sílabas tônicas e suas classificações',
    '22 - Futebol dos acentos',
    '23 - Som do I e E',
    '24 - Será que termina com O ou U ?',
    '25 - Aprendendo a escrever: M antes de P ou B',
    '26 - Futebol das palavras: Ge / Gi Gue / Gui',
    '27 - Texto de divulgação científica',
    '28 - Uso do r / rr',
    '29 - Uso do s / ss',
    '30 - Paragrafação',
    '31 - Noticia',
    '32 - Detetive da linguagem: verbos',
    '33 - Conto: adjetivo',
    '34 - Troca - troca de palavras',
    '35 - Jogo dos pronomes 2',
    '36 - Carta de reclamação',
    '37 - Sufixos e prefixos',
    '38 - Palavras com ch, lh, nh',
    '39 - Anuncio publicitario',
  ],
    '+ 39 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_3ano_linguagem.png'
  )

  const ef3AnoMatematica = makeLivro('LIVRO DIGITAL - EF - 3° ANO - MATEMÁTICA', [
    '1 - Calendário do Bob',
    '2 - Aprendendo com as horas',
    '3 - Calendário do Beto',
    '4 - Máquina das surpresas',
    '5 - Máquina de dinheiro 2',
    '6 - Futebol dos números: centena, dezena e unidade - transformação numérica',
    '7 - Futebol dos números 4',
    '8 - Números: antes, depois e sequência',
    '9 - Detetive das medidas 1',
    '10 - Detetive das medidas 2',
    '11 - Somando e aprendendo com a reta numérica',
    '12 - Acertando a soma 3',
    '13 - Formas espaciais 1',
    '14 - Formas espaciais no cotidiano',
    '15 - Poliedros e corpos redondos',
    '16 - Localização na malha',
    '17 - Sequência e percurso',
    '18 - Figuras geométricas planas',
    '19 - Problemas envolvendo a multiplicação',
    '20 - Problemas envolvendo a divisão',
    '21 - Problemas envolvendo dinheiro 2',
    '22 - Problemas envolvendo a adição',
    '23 - Problemas envolvendo a subtração',
    '24 - Tabelas: gastos e compras',
    '25 - Expressões numéricas',
    '26 - Analisando tabelas',
    '27 - Medidas de massa com operações',
    '28 - Medidas de capacidade: litro e ml',
    '29 - Sólidos geométricos',
    '30 - Polígonos',
    '31 - Paralelogramos e trapézios',
    '32 - Jogo da simetria e congruência',
    '33 - Ângulos e perímetros',
    '34 - Multiplicação em malha quadriculada',
    '35 - Problemas envolvendo a multiplicação 2',
    '36 - Aprendendo com o tempo 2',
    '37 - Moedas brasileiras',
    '38 - Explorando divisões',
    '39 - Maior que, menor que, igual que',
  ],
    '+ 39 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_3ano_matematica.png'
  )

  const ef4AnoLinguagem = makeLivro('LIVRO DIGITAL - EF - 4° ANO - LINGUAGEM', [
    '1 - Verbete',
    '2 - Bob em: Aventura da Pontuação',
    '3 - Jogo da Pontuação',
    '4 - Sinais de Pontuação',
    '5 - Carta',
    '6 - Regras do Jogo: Dominó',
    '7 - Texto Instrucional: dobradura de cachorro',
    '8 - Instruções de Confecções',
    '9 - Jogo dos Verbos',
    '10 - Poema: Palavras com X ou CH',
    '11 - Futebol dos Acentos',
    '12 - Carta de Reclamação',
    '13 - Aventura das vogais: Aprendendo',
    'encontro vocálico',
    '14 - Poema e Rima',
    '15 - Escalada das Rimas',
    '16 - Desafio 2 :Dicionário',
    '17 - Um encontro diferente: Aprendendo Dígrafos',
    '18 - Fábula',
    '19 - João e Maria',
    '20 - João e o pé de Feijão',
    '21 - Aprendendo ortografia - s, ss, c, ç, sc, xc',
    '22 - Aprendendo ortografia - s, z e g',
    '23 - Aprendendo ortografia - s e z',
    '24 - Jogo dos pronomes',
    '25 - Jogo dos pronomes 2',
    '26 - Concordância Verbal',
    '27 - Concordância Nominal',
    '28 - Basquete de palavras com Ç',
    '29 - Pronomes em frases',
  ],
    '+ 29 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_4ano_linguagem.png'
  )

  const ef4AnoMatematica = makeLivro('LIVRO DIGITAL - EF - 4° ANO - MATEMÁTICA', [
    '1 - Números Cardinais e Egípcios 2',
    '2 - Futebol dos números 4',
    '3 - Sistema de numeração decimal',
    '4 - Sequência numérica: maior ou menor',
    '5 - Somando e aprendendo com a reta númerica',
    '6 - Acertando a adição 4',
    '7 - Bob e a subtração 4',
    '8 - Acertando as operações soma e subtração',
    '9 - Mina da multiplicação 4',
    '10 - Vamos multiplicar ?',
    '11 - Jogo da metade, dobro e terça parte',
    '12 - Problemas envolvendo divisão',
    '13 - Futebol da divisão 4',
    '14 - Aventura com o Bob 5: multiplicação e divisão',
    '15 - Formas espaciais 2',
    '16 - Poliedros e corpo redondos',
    '17 - Sequência e Percurso',
    '18 - Formas espaciais no cotidiano',
    '19 - Aprendendo com o tempo',
    '20 - Aprendendo com as horas',
    '21 - Sólidos Geométricos',
    '22 - Figuras geométricas planas',
    '23 - Polígonos 2',
    '24 - Tangram Moradias',
    '25 - Ângulos 2',
    '26 - Polígonos',
    '27 - Jogo da simetria',
    '28 - Detetive das medidas 1',
    '29 - Detetive das medidas 2',
    '30 - Detetive das medidas 3: com operações',
    '31 - Área',
    '32 - Área das figuras',
    '33 - Perímetro',
    '34 - Perímetro e distância',
    '35 - Máquinas das surpresas',
    '36 - Máquina de dinheiro 2',
    '37 - Dinheiro',
    '38 - Problemas envolvendo dinheiro',
    '39 - Problemas envolvendo dinheiro 2',
    '40 - Sistema de numeração decimal 2',
    '41 - Operações com numeros na forma decimal',
    '42 - Números Fracionários',
    '43 - Números na forma decimal',
  ],
    '+ 43 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_4ano_matematica.png'
  )

  const ef5AnoLinguagem = makeLivro('LIVRO DIGITAL - EF - 5° ANO - LINGUAGEM', [
    '1 - Texto instrucional',
    '2 - Som do I e do E',
    '3 - Será que é L ou será que é U ?',
    '4 - S ou Z',
    '5 - Vôlei do L',
    '6 - Palavras com G e J',
    '7 - Corta - palavras com S e SS',
    '8 - De olho nas palavras: X ou CH',
    '9 - Um encontro diferente: aprendendo dígrafos',
    '10 - Aprendendo a escrever: M antes de P e B',
    '11 - Anúncio publicitário: primitivo, derivado e composto.',
    '12 - Poema: A lua no cinema',
    '13 - Futebol dos acentos 2',
    '14 - Jogo dos pronomes 2',
    '15 - Crônica',
    '16 - Desafio 3: Leitura de um conto',
    '17 - Desafio da Pontuação',
    '18 - Jogo dos verbos',
    '19 - Jogo dos verbos 2',
    '20 - Tempo verbal',
    '21 - Tempo verbal 2 - tempos do futuro',
    '22 - desafio 2 dicionário',
    '23 - Futebol dos acentos',
    '24 - Tempo verbal 3 - pretérito mais que perfeito',
    '25 - Texto de divulgação científica',
    '26 - Conjunções',
    '27 - Jogos dos pronomes 3',
    '28 - Polissemia',
    '29 - Conjunções 2',
    '30 - Reportagem',
    '31 - Jogo da pontuação',
    '32 - Bob em a aventura da pontuação',
    '33 - Fato e opinião',
    '34 - Sílabas tônicas e suas classificações',
  ],
    '+ 34 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_5ano_linguagem.png'
  )

  const ef5AnoMatematica = makeLivro('LIVRO DIGITAL - EF - 5° ANO - MATEMÁTICA', [
    '1 - Classes e ordem dos números: quadro posicional',
    '2 - Charada dos números 2',
    '3 - Sequência Numérica 5',
    '4 - Aprendendo com gráficos e tabelas 5',
    '5 - Acertando a adição 4',
    '6 - Acertando as operações: adição e subtração',
    '7 - Aventura com o Bob 5: multiplicação e divisão',
    '8 - Futebol da divisão 4',
    '9 - Porcentagem',
    '10 - Problemas envolvendo dinheiro 2',
    '11 - Máquina de dinheiro 2',
    '12 - Localização na malha',
    '13 - Localização na malha 2',
    '14 - Localização na malha 5',
    '15 - Poliedros 5 ano',
    '16 - Ângulos',
    '17 - Formas espaciais 2',
    '18 - Ângulos 2',
    '19 - Círculo e circunferência',
    '20 - Polígonos 3',
    '21 - Tipos de triângulos',
    '22 - Quiz dos quadriláteros',
    '23 - Ampliação e redução de figuras',
    '24 - Números na forma decimal',
    '25 - Medidas de comprimento',
    '26 - Medidas de massa',
    '27 - Medidas de capacidade',
    '28 - Aprendendo com o tempo',
    '29 - Área',
    '30 - Área das figuras',
    '31 - Perímetro',
    '32 - Bob em: multiplicação com números decimais',
    '33 - Bob em: divisão com números decimais',
    '34 - Números fracionários',
    '35 - Números mistos',
    '36 - Operações com números fracionários',
    '37 - Adição e subtração de frações com denominadores diferentes',
    '38 - Gráficos e porcentagem',
  ],
    '+ 38 CONTEÚDOS GAMIFICADOS!',
    'catalogo_ef_5ano_matematica.png'
  )

  livros.push({})
  livros.push(ei3Anos)
  livros.push(ei4Anos)
  livros.push(ei5Anos)
  livros.push(ef1AnoLinguagem)
  livros.push(ef1AnoMatematica)
  livros.push(ef2AnoLinguagem)
  livros.push(ef2AnoMatematica)
  livros.push(ef3AnoLinguagem)
  livros.push(ef3AnoMatematica)
  livros.push(ef4AnoLinguagem)
  livros.push(ef4AnoMatematica)
  livros.push(ef5AnoLinguagem)
  livros.push(ef5AnoMatematica)

  return livros
} 
