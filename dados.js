/* ============================================================
   DADOS.JS — BASE DE CONHECIMENTO DA CENTRAL DE AJUDA
   Domínio Farma Contabilidade
   ============================================================

   Este arquivo contém TODOS os conteúdos que serão
   encontrados pela barra de pesquisa da Central de Ajuda.

   ============================================================
   REGRAS DE OURO PARA ADICIONAR UM NOVO ITEM:
   ============================================================

   1. Copie o "OBJETO TEMPLATE" comentado logo abaixo.
   2. Cole no final do array, ANTES do colchete de fechamento ].
   3. Preencha cada campo seguindo as instruções.
   4. O campo "url" DEVE seguir a estrutura de pastas do projeto:
      
      nome-da-pasta-do-modulo/nome-da-pagina.html
      
      Exemplo: Se o módulo é "O Início da Jornada" e o conteúdo
      é "O que é Contrato Social", a url será:
      
      o-inicio-da-jornada/o-que-e-contrato-social.html
      
      ⚠️  Use APENAS letras minúsculas, hífens no lugar de
          espaços e sem acentos.
      
   5. O campo "icone" deve conter o CONTEÚDO INTERNO de um SVG
      no padrão Lucide/Feather (sem a tag <svg> externa).
      Consulte: https://lucide.dev/icons

   6. O campo "palavras_chave" é um array de sinônimos e termos
      relacionados que ajudam o motor de busca a encontrar o
      conteúdo. Quanto mais palavras relevantes, melhor.

   ============================================================
   OBJETO TEMPLATE — COPIE, COLE E PREENCHA
   ============================================================

   {
     id: 999,                              // Número único (incremental)
     modulo: 1,                            // Número do módulo (1 a 10)
     moduloNome: "Nome do Módulo",         // Nome por extenso
     titulo: "Título do Conteúdo",         // Título que aparece no card
     descricao: "Breve descrição...",      // 1-2 linhas explicativas
     url: "nome-da-pasta/nome-da-pagina.html",
     icone: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
     palavras_chave: ["termo1", "termo2", "sinônimo"]
   },

   ============================================================ */

var baseDeConhecimento = [

    /* ==========================================================
     MÓDULO 1 — O INÍCIO DA JORNADA
     Pasta: o-inicio-da-jornada/
     ========================================================== */
  {
    id: 1, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "Diferença entre MEI, ME e EPP",
    descricao: "Entenda os portes empresariais e descubra qual se encaixa no seu negócio.",
    url: "o-inicio-da-jornada/diferenca-entre-mei-me-e-epp.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["mei", "me", "epp", "porte", "microempresa", "empresa pequeno porte", "faturamento"]
  },
  {
    id: 2, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "O que é Contrato Social",
    descricao: "O documento de nascimento da sua empresa: cláusulas, regras e cuidados.",
    url: "o-inicio-da-jornada/o-que-e-contrato-social.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["contrato social", "documento", "abertura", "cláusula", "registro", "junta comercial"]
  },
  {
    id: 3, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "Empresa de um dono só x Sociedade",
    descricao: "Vantagens, riscos e quando vale a pena ter um sócio no negócio.",
    url: "o-inicio-da-jornada/empresa-de-um-dono-so-x-sociedade.html",
    icone: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>',
    palavras_chave: ["individual", "sociedade", "sócio", "slu", "ltda", "unipessoal", "parceiro"]
  },
  {
    id: 4, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "Escolha do Regime Tributário",
    descricao: "Simples Nacional, Lucro Presumido ou Lucro Real: qual o melhor para sua farmácia?",
    url: "o-inicio-da-jornada/escolha-do-regime-tributario.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["simples nacional", "lucro presumido", "lucro real", "regime", "impostos", "tributação"]
  },
  {
    id: 5, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "CNAE para Farmácias e Drogarias",
    descricao: "Como escolher as atividades (CNAE) corretas para venda de medicamentos e perfumaria.",
    url: "o-inicio-da-jornada/cnae-para-farmacias-e-drogarias.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["cnae", "atividade", "drogaria", "perfumaria", "código de atividade", "abertura"]
  },
  {
    id: 6, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "Alvará de Funcionamento",
    descricao: "O que é o alvará da prefeitura, como solicitar e prazos de liberação.",
    url: "o-inicio-da-jornada/alvara-de-funcionamento.html",
    icone: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/>',
    palavras_chave: ["alvará", "prefeitura", "licença", "funcionamento", "localização", "taxa"]
  },
  {
    id: 7, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "Capital Social: O que é?",
    descricao: "Entenda como definir o valor do capital social na abertura da sua empresa.",
    url: "o-inicio-da-jornada/capital-social-o-que-e.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["capital social", "investimento inicial", "abertura", "dinheiro", "integralização"]
  },
  {
    id: 8, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "Inscrição Estadual e Municipal",
    descricao: "As diferenças entre as inscrições e para que cada uma serve.",
    url: "o-inicio-da-jornada/inscricao-estadual-e-municipal.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["ie", "im", "inscrição estadual", "inscrição municipal", "sefaz", "prefeitura", "impostos"]
  },
  {
    id: 9, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "Certificado Digital: e-CNPJ e e-CPF",
    descricao: "A assinatura eletrônica da sua empresa para emitir notas e assinar documentos.",
    url: "o-inicio-da-jornada/certificado-digital.html",
    icone: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
    palavras_chave: ["certificado digital", "a1", "a3", "token", "assinatura", "e-cnpj", "e-cpf"]
  },
  {
    id: 10, modulo: 1, moduloNome: "O Início da Jornada",
    titulo: "Conta Bancária PJ",
    descricao: "Por que você precisa separar o seu dinheiro do dinheiro da empresa desde o Dia 1.",
    url: "o-inicio-da-jornada/conta-bancaria-pj.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["conta pj", "banco", "separação", "finanças", "pessoa jurídica", "cartão corporativo"]
  }
  
    ,
  /* ==========================================================
     MÓDULO 2 — DOMINANDO O RH
     Pasta: dominando-o-rh/
     ========================================================== */
  {
    id: 11, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Processo de Admissão e Documentos",
    descricao: "A lista completa de documentos necessários para contratar um novo funcionário.",
    url: "dominando-o-rh/processo-de-admissao.html",
    icone: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>',
    palavras_chave: ["admissão", "contratação", "documentos", "rh", "funcionário", "registro"]
  },
  {
    id: 12, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Exame Médico: ASO Admissional",
    descricao: "Tudo sobre a obrigatoriedade dos exames médicos para os colaboradores.",
    url: "dominando-o-rh/exame-medico-aso.html",
    icone: '<path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z"/><path d="M8.5 8.5l7 7"/>',
    palavras_chave: ["aso", "exame", "medicina do trabalho", "saúde", "admissional", "demissional", "aso"]
  },
  {
    id: 13, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Tipos de Contrato de Trabalho",
    descricao: "Contrato de experiência, prazo determinado e indeterminado: como funcionam.",
    url: "dominando-o-rh/tipos-de-contrato.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["contrato", "experiência", "prazo", "clt", "carteira assinada", "tipos"]
  },
  {
    id: 14, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Registro de Ponto",
    descricao: "Quando o controle de ponto eletrônico ou manual é obrigatório na farmácia.",
    url: "dominando-o-rh/registro-de-ponto.html",
    icone: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    palavras_chave: ["ponto", "horário", "relógio", "controle", "eletrônico", "horas extras", "atrasos"]
  },
  {
    id: 15, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Vale-Transporte e Regras",
    descricao: "Como funciona o desconto de 6% e a obrigatoriedade do benefício.",
    url: "dominando-o-rh/vale-transporte.html",
    icone: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
    palavras_chave: ["vt", "vale-transporte", "ônibus", "condução", "desconto", "6%", "benefício"]
  },
  {
    id: 16, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Benefícios do Sindicato (CCT)",
    descricao: "O que a Convenção Coletiva dos balconistas e farmacêuticos exige da sua empresa.",
    url: "dominando-o-rh/beneficios-do-sindicato.html",
    icone: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>',
    palavras_chave: ["sindicato", "cct", "convenção", "acordo", "dissídio", "farmacêuticos", "balconistas"]
  },
  {
    id: 17, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Faltas e Atestados Médicos",
    descricao: "Quais faltas podem ser descontadas e como validar atestados médicos.",
    url: "dominando-o-rh/faltas-e-atestados.html",
    icone: '<path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z"/><path d="M8.5 8.5l7 7"/>',
    palavras_chave: ["falta", "atestado", "doença", "abono", "desconto", "justificada", "cid"]
  },
  {
    id: 18, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Advertências e Suspensões",
    descricao: "Passo a passo legal para aplicar medidas disciplinares na sua equipe.",
    url: "dominando-o-rh/advertencias-e-suspensoes.html",
    icone: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    palavras_chave: ["advertência", "suspensão", "justa causa", "disciplina", "punição", "RH"]
  },
  {
    id: 19, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Jornada de Trabalho: Escala 12x36 e 6x1",
    descricao: "Entenda os limites de carga horária e como organizar as escalas na drogaria.",
    url: "dominando-o-rh/jornada-de-trabalho.html",
    icone: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    palavras_chave: ["escala", "jornada", "horário", "12x36", "6x1", "domingo", "feriado", "plantão"]
  },
  {
    id: 20, modulo: 2, moduloNome: "Dominando o RH",
    titulo: "Adicional Noturno",
    descricao: "Quem tem direito ao adicional noturno e como é feito o cálculo.",
    url: "dominando-o-rh/adicional-noturno.html",
    icone: '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>',
    palavras_chave: ["noturno", "madrugada", "adicional", "20%", "22h", "plantão", "noturna"]
  },

  /* ==========================================================
     MÓDULO 3 — ROTINAS TRABALHISTAS
     Pasta: rotinas-trabalhistas/
     ========================================================== */
  {
    id: 21, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "Folha de Pagamento e Holerite",
    descricao: "Entendendo os proventos e descontos no contracheque do funcionário.",
    url: "rotinas-trabalhistas/folha-de-pagamento.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["folha", "holerite", "contracheque", "salário", "descontos", "proventos", "adiantamento"]
  },
  {
    id: 22, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "INSS e FGTS",
    descricao: "Prazos de vencimento, alíquotas e as guias de recolhimento mensais.",
    url: "rotinas-trabalhistas/inss-e-fgts.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["inss", "fgts", "guia", "imposto", "recolhimento", "previdência", "fundo de garantia"]
  },
  {
    id: 23, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "Férias: Regras e Pagamentos",
    descricao: "Período aquisitivo, concessivo, abono pecuniário (vender férias) e prazos de pagamento.",
    url: "rotinas-trabalhistas/ferias-regras-e-pagamento.html",
    icone: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    palavras_chave: ["férias", "descanso", "vender férias", "abono", "terço de férias", "1/3"]
  },
  {
    id: 24, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "Décimo Terceiro Salário (13º)",
    descricao: "Prazos para o pagamento da primeira e segunda parcelas e como calcular.",
    url: "rotinas-trabalhistas/decimo-terceiro-salario.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["13º", "décimo terceiro", "natalina", "gratificação", "parcela", "novembro", "dezembro"]
  },
  {
    id: 25, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "Rescisão de Contrato",
    descricao: "Diferenças entre pedido de demissão, dispensa sem justa causa e acordos.",
    url: "rotinas-trabalhistas/rescisao-de-contrato.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><line x1="9" y1="12" x2="15" y2="12"/>',
    palavras_chave: ["rescisão", "demissão", "acerto", "término", "justa causa", "acordo", "dispensa"]
  },
  {
    id: 26, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "Aviso Prévio",
    descricao: "Aviso trabalhado x Aviso indenizado: direitos e deveres na hora da demissão.",
    url: "rotinas-trabalhistas/aviso-previo.html",
    icone: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    palavras_chave: ["aviso prévio", "trabalhado", "indenizado", "redução", "demissão", "30 dias"]
  },
  {
    id: 27, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "Adicional de Insalubridade",
    descricao: "Obrigatório para aplicadores de injetáveis? Como funciona o laudo na farmácia.",
    url: "rotinas-trabalhistas/adicional-de-insalubridade.html",
    icone: '<path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z"/><path d="M8.5 8.5l7 7"/>',
    palavras_chave: ["insalubridade", "periculosidade", "risco", "injetáveis", "aplicação", "adicional", "20%"]
  },
  {
    id: 28, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "Pró-labore dos Sócios",
    descricao: "O que é, por que é obrigatório e como calcular os impostos sobre o pró-labore.",
    url: "rotinas-trabalhistas/pro-labore-dos-socios.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["pró-labore", "salário do dono", "sócio", "retirada", "inss sócio", "irrf"]
  },
  {
    id: 29, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "eSocial para Empresas",
    descricao: "Entenda o sistema do Governo e quais dados sua empresa deve enviar mensalmente.",
    url: "rotinas-trabalhistas/esocial-para-empresas.html",
    icone: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    palavras_chave: ["esocial", "governo", "obrigações", "eventos", "sst", "saúde e segurança"]
  },
  {
    id: 30, modulo: 3, moduloNome: "Rotinas Trabalhistas",
    titulo: "Informe de Rendimentos",
    descricao: "O documento obrigatório que a empresa fornece para a Declaração de IR do funcionário.",
    url: "rotinas-trabalhistas/informe-de-rendimentos.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["informe", "rendimentos", "imposto de renda", "irpf", "funcionário", "dirf"]
  }
  ,
  /* ==========================================================
     MÓDULO 4 — TRIBUTAÇÃO E IMPOSTOS
     Pasta: tributacao-e-impostos/
     ========================================================== */
  {
    id: 31,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "Como funciona o Simples Nacional",
    descricao: "Guia completo sobre a tributação mais comum do Brasil, limites e tabelas (Anexos).",
    url: "tributacao-e-impostos/como-funciona-o-simples-nacional.html",
    icone: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    palavras_chave: ["simples", "simples nacional", "imposto", "tabela", "anexo", "alíquota", "faturamento"]
  },
  {
    id: 32,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "Guia DAS (Boleto do Simples)",
    descricao: "Como emitir, quando vence e como recalcular a guia DAS em caso de atraso.",
    url: "tributacao-e-impostos/guia-das-boleto-do-simples.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["das", "boleto", "guia", "vencimento", "dia 20", "pagar", "recalcular"]
  },
  {
    id: 33,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "Lucro Presumido e Lucro Real",
    descricao: "Alternativas ao Simples Nacional: entenda se sua empresa já deve mudar de regime.",
    url: "tributacao-e-impostos/lucro-presumido-e-lucro-real.html",
    icone: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    palavras_chave: ["lucro presumido", "lucro real", "transição", "regime", "pis", "cofins"]
  },
  {
    id: 34,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "ICMS: Imposto Estadual sobre Produtos",
    descricao: "Tudo sobre o Imposto de Circulação de Mercadorias, alíquotas e guias (GARE/DARE).",
    url: "tributacao-e-impostos/icms-imposto-estadual.html",
    icone: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
    palavras_chave: ["icms", "estado", "mercadoria", "venda", "produto", "difal", "dare", "gare"]
  },
  {
    id: 35,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "ISS: Imposto Municipal sobre Serviços",
    descricao: "Como é cobrado o imposto da Prefeitura e variação de alíquotas (2% a 5%).",
    url: "tributacao-e-impostos/iss-imposto-municipal.html",
    icone: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/>',
    palavras_chave: ["iss", "issqn", "serviço", "prefeitura", "nota de serviço"]
  },
  {
    id: 36,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "Substituição Tributária (ICMS-ST)",
    descricao: "O que é a ST, como impacta as notas fiscais e sua importância no setor farmacêutico.",
    url: "tributacao-e-impostos/substituicao-tributaria-icms-st.html",
    icone: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
    palavras_chave: ["st", "substituição tributária", "icms-st", "antecipação", "medicamento", "farmácia"]
  },
  {
    id: 37,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "Fator R do Simples Nacional",
    descricao: "Como algumas empresas podem reduzir o imposto saindo do Anexo V para o Anexo III.",
    url: "tributacao-e-impostos/fator-r-do-simples-nacional.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["fator r", "anexo iii", "anexo v", "redução", "planejamento", "folha", "pró-labore"]
  },
  {
    id: 38,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "Retenção de Impostos na Fonte",
    descricao: "Entenda quando você deve reter INSS, IRRF, CSLL, PIS e COFINS dos seus fornecedores.",
    url: "tributacao-e-impostos/retencao-de-impostos-na-fonte.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["retenção", "retido", "irrf", "fonte", "inss retido", "fornecedor"]
  },
  {
    id: 39,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "Diferencial de Alíquota (DIFAL)",
    descricao: "Como calcular e pagar a diferença de imposto em compras de outros estados.",
    url: "tributacao-e-impostos/diferencial-de-aliquota-difal.html",
    icone: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>',
    palavras_chave: ["difal", "diferencial", "alíquota", "fronteira", "compra interestadual", "barreira"]
  },
  {
    id: 40,
    modulo: 4,
    moduloNome: "Tributação e Impostos",
    titulo: "Parcelamento de Impostos Atrasados",
    descricao: "Regras da Receita Federal e PGFN para negociar e parcelar seus débitos pendentes.",
    url: "tributacao-e-impostos/parcelamento-de-impostos.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["parcelamento", "dívida", "atrasado", "receita federal", "pgfn", "negociação"]
  },

  /* ==========================================================
     MÓDULO 5 — NOTAS FISCAIS
     Pasta: notas-fiscais/
     ========================================================== */
  {
    id: 41,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "O que é NF-e, NFS-e e NFC-e?",
    descricao: "Aprenda a diferença entre Nota de Produto (XML), Serviço e Cupom Fiscal Eletrônico.",
    url: "notas-fiscais/diferenca-nfe-nfse-nfce.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["nf-e", "nfe", "nfs-e", "nfse", "nfc-e", "cupom fiscal", "danfe", "xml"]
  },
  {
    id: 42,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "Como emitir a primeira Nota Fiscal",
    descricao: "Passo a passo básico, sistemas emissores e dados necessários para a emissão.",
    url: "notas-fiscais/como-emitir-a-primeira-nota.html",
    icone: '<polygon points="5 3 19 12 5 21 5 3"/>',
    palavras_chave: ["emitir", "emissão", "gerar nota", "sistema", "primeira", "danfe"]
  },
  {
    id: 43,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "Cancelamento de Nota Fiscal: Prazos e Regras",
    descricao: "Descubra até quando você pode cancelar uma nota emitida com erro (24h ou 7 dias).",
    url: "notas-fiscais/cancelamento-de-nota-fiscal.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><line x1="9" y1="15" x2="15" y2="9"/><line x1="9" y1="9" x2="15" y2="15"/>',
    palavras_chave: ["cancelar", "cancelamento", "prazo", "erro", "estorno", "nota errada"]
  },
  {
    id: 44,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "Carta de Correção Eletrônica (CC-e)",
    descricao: "O que pode e o que não pode ser alterado através de uma Carta de Correção.",
    url: "notas-fiscais/carta-de-correcao-cce.html",
    icone: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>',
    palavras_chave: ["cc-e", "cce", "carta de correção", "corrigir nota", "alteração"]
  },
  {
    id: 45,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "Notas Fiscais de Devolução",
    descricao: "Como emitir nota de devolução ao fornecedor ou receber devolução de clientes.",
    url: "notas-fiscais/notas-fiscais-de-devolucao.html",
    icone: '<polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 014-4h12"/>',
    palavras_chave: ["devolução", "retorno", "recusa", "fornecedor", "cliente devolução"]
  },
  {
    id: 46,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "O que é CFOP e quais os mais utilizados?",
    descricao: "Entenda o Código Fiscal de Operações e Prestações (entradas, saídas, interno, externo).",
    url: "notas-fiscais/o-que-e-cfop.html",
    icone: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    palavras_chave: ["cfop", "código", "5102", "5405", "operação", "natureza da operação"]
  },
  {
    id: 47,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "NCM: A Nomenclatura dos Produtos",
    descricao: "Como encontrar o NCM correto e por que ele é crucial para calcular os impostos.",
    url: "notas-fiscais/ncm-nomenclatura-produtos.html",
    icone: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    palavras_chave: ["ncm", "classificação", "imposto", "produto", "tributação do item"]
  },
  {
    id: 48,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "CSOSN e CST: Situação Tributária",
    descricao: "Códigos que indicam se a venda é tributada, isenta, sujeita a ST ou exportação.",
    url: "notas-fiscais/csosn-e-cst.html",
    icone: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    palavras_chave: ["csosn", "cst", "código", "situação tributária", "102", "500"]
  },
  {
    id: 49,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "Certificado Digital Bloqueado para NF-e",
    descricao: "Solução de problemas comuns quando seu emissor de notas recusa a assinatura.",
    url: "notas-fiscais/certificado-digital-bloqueado.html",
    icone: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><line x1="12" y1="15" x2="12" y2="17"/>',
    palavras_chave: ["erro", "certificado", "bloqueado", "senha", "assinatura inválida", "emissor"]
  },
  {
    id: 50,
    modulo: 5,
    moduloNome: "Notas Fiscais",
    titulo: "Guarda de Arquivos XML (Prazo Legal)",
    descricao: "Por quanto tempo sua empresa é obrigada a armazenar os arquivos XML das notas fiscais.",
    url: "notas-fiscais/guarda-de-arquivos-xml.html",
    icone: '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>',
    palavras_chave: ["xml", "armazenamento", "prazo", "nuvem", "5 anos", "guarda legal", "danfe"]
  },

  /* ==========================================================
     MÓDULO 6 — GESTÃO FINANCEIRA E CONTÁBIL
     Pasta: gestao-financeira/
     ========================================================== */
  {
    id: 51,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Pró-labore: O Salário do Sócio",
    descricao: "O que é, por que é obrigatório e como calcular os descontos de INSS e IRRF.",
    url: "gestao-financeira/pro-labore-o-salario-do-socio.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["pró-labore", "prolabore", "salário sócio", "retirada", "inss sócio"]
  },
  {
    id: 52,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Distribuição de Lucros",
    descricao: "Regras de isenção de imposto de renda e como retirar dinheiro de forma legal.",
    url: "gestao-financeira/distribuicao-de-lucros.html",
    icone: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
    palavras_chave: ["lucro", "distribuição", "dividendos", "isento", "saque sócio"]
  },
  {
    id: 53,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Mistura de Conta Física e Jurídica (PJ/PF)",
    descricao: "O Princípio da Entidade e os riscos de pagar contas pessoais com o dinheiro da empresa.",
    url: "gestao-financeira/mistura-de-conta-fisica-e-juridica.html",
    icone: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    palavras_chave: ["mistura", "pf", "pj", "conta pessoal", "pagamento errado", "confusão patrimonial"]
  },
  {
    id: 54,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Como Fazer Conciliação Bancária",
    descricao: "A importância de bater os valores do extrato com o seu controle financeiro diário.",
    url: "gestao-financeira/conciliacao-bancaria.html",
    icone: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
    palavras_chave: ["conciliação", "extrato", "banco", "fechamento", "ofx"]
  },
  {
    id: 55,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Envio de Extratos (Arquivo OFX)",
    descricao: "Como exportar o extrato no formato OFX do seu banco e enviar para a contabilidade.",
    url: "gestao-financeira/envio-de-extratos-ofx.html",
    icone: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    palavras_chave: ["ofx", "extrato", "exportar", "arquivo banco", "envio contabilidade"]
  },
  {
    id: 56,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Comprovantes de Despesas Aceitos",
    descricao: "Notas fiscais, recibos, faturas: saiba o que tem validade para a contabilidade.",
    url: "gestao-financeira/comprovantes-de-despesas-aceitos.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["comprovante", "recibo", "despesa", "gasto", "validade contábil", "fatura"]
  },
  {
    id: 57,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "O que é DRE (Demonstração do Resultado)?",
    descricao: "Entenda o relatório que mostra de forma simples se sua empresa teve lucro ou prejuízo.",
    url: "gestao-financeira/o-que-e-dre.html",
    icone: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    palavras_chave: ["dre", "demonstração", "resultado", "lucro", "prejuízo", "relatório"]
  },
  {
    id: 58,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Entendendo o Balanço Patrimonial",
    descricao: "A fotografia financeira da sua empresa: Ativos (Bens) x Passivos (Dívidas).",
    url: "gestao-financeira/balanco-patrimonial.html",
    icone: '<path d="M4 19v-2M4 11V9M4 21a2 2 0 002-2V5a2 2 0 00-2-2H2M18 19v-2M18 11V9M18 21a2 2 0 002-2V5a2 2 0 00-2-2h-2M14 9h-4M14 15h-4"/>',
    palavras_chave: ["balanço", "patrimonial", "ativo", "passivo", "patrimônio líquido"]
  },
  {
    id: 59,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Controle de Estoque Contábil",
    descricao: "A importância do Inventário Anual e o impacto do estoque nos seus impostos (Lucro Real).",
    url: "gestao-financeira/controle-de-estoque-contabil.html",
    icone: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    palavras_chave: ["estoque", "inventário", "contagem", "mercadoria", "saldo"]
  },
  {
    id: 60,
    modulo: 6,
    moduloNome: "Gestão Financeira",
    titulo: "Relatório de Faturamento Mensal",
    descricao: "Como consolidar suas vendas de balcão, cartões e convênios para envio mensal.",
    url: "gestao-financeira/relatorio-de-faturamento.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["faturamento", "vendas", "bruto", "receita", "relatório mensal"]
  },

  /* ==========================================================
     MÓDULO 7 — OBRIGAÇÕES ACESSÓRIAS E CERTIDÕES
     Pasta: obrigacoes-acessorias/
     ========================================================== */
  {
    id: 61,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "O que são Obrigações Acessórias?",
    descricao: "Declarações obrigatórias enviadas ao governo (além de apenas pagar impostos).",
    url: "obrigacoes-acessorias/o-que-sao-obrigacoes-acessorias.html",
    icone: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    palavras_chave: ["obrigação", "acessória", "declaração", "envio", "governo", "multa"]
  },
  {
    id: 62,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "DEFIS: A Declaração do Simples",
    descricao: "A declaração anual que empresas do Simples Nacional devem entregar até março.",
    url: "obrigacoes-acessorias/defis-declaracao-do-simples.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["defis", "anual", "declaração", "simples nacional", "março", "imposto de renda pj"]
  },
  {
    id: 63,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "SPED Fiscal e EFD Contribuições",
    descricao: "Os arquivos digitais pesados exigidos para empresas do Lucro Presumido e Real.",
    url: "obrigacoes-acessorias/sped-fiscal.html",
    icone: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    palavras_chave: ["sped", "efd", "icms", "ipi", "contribuições", "fiscal", "arquivo digital"]
  },
  {
    id: 64,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "e-Social: Impactos na sua empresa",
    descricao: "A plataforma do governo unificada para as obrigações trabalhistas e previdenciárias.",
    url: "obrigacoes-acessorias/e-social-impactos.html",
    icone: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>',
    palavras_chave: ["esocial", "e-social", "governo", "folha", "trabalhista", "sst", "segurança"]
  },
  {
    id: 65,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "DIRF e DCTF (O que são?)",
    descricao: "Declarações anuais e mensais que reportam impostos retidos na fonte e débitos.",
    url: "obrigacoes-acessorias/dirf-e-dctf.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>',
    palavras_chave: ["dirf", "dctf", "imposto de renda", "retido", "declaração"]
  },
  {
    id: 66,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "Imposto de Renda Pessoa Física (IRPF)",
    descricao: "Como declarar seus rendimentos de pró-labore e lucros na declaração pessoal.",
    url: "obrigacoes-acessorias/imposto-de-renda-pessoa-fisica-irpf.html",
    icone: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    palavras_chave: ["irpf", "imposto de renda", "pessoa física", "leão", "declaração pf", "sócio"]
  },
  {
    id: 67,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "Certidão Negativa de Débitos (CND)",
    descricao: "Como emitir a CND Federal, Estadual, Municipal, FGTS e Trabalhista.",
    url: "obrigacoes-acessorias/certidao-negativa-de-debitos-cnd.html",
    icone: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    palavras_chave: ["cnd", "certidão", "negativa", "licitação", "comprovante regularidade", "débitos"]
  },
  {
    id: 68,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "Renovação do Alvará da Prefeitura",
    descricao: "Fique atento ao prazo de vencimento e às taxas anuais do Alvará de Funcionamento.",
    url: "obrigacoes-acessorias/renovacao-do-alvara.html",
    icone: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/>',
    palavras_chave: ["alvará", "renovação", "taxa", "prefeitura", "funcionamento", "vencimento"]
  },
  {
    id: 69,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "Taxas Municipais (TFE, TFA, TLIF)",
    descricao: "Entenda as taxas de Fiscalização, Estabelecimento e Anúncios cobradas pela prefeitura.",
    url: "obrigacoes-acessorias/taxas-municipais.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["tfe", "tfa", "tlif", "taxa", "prefeitura", "fiscalização", "anúncio"]
  },
  {
    id: 70,
    modulo: 7,
    moduloNome: "Obrigações Acessórias",
    titulo: "Malha Fina da Receita Federal",
    descricao: "Cruzamento de dados (Cartões, PIX e Notas): como evitar que sua empresa caia na malha fina.",
    url: "obrigacoes-acessorias/malha-fina-receita.html",
    icone: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    palavras_chave: ["malha fina", "cruzamento", "fiscalização", "pix", "cartão de crédito", "sonegação", "receita"]
  },

  /* ==========================================================
     MÓDULO 8 — FARMÁCIA NA PRÁTICA (Domínio Farma)
     Pasta: farmacia-na-pratica/
     ========================================================== */
  {
    id: 71,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "Registro na ANVISA (AFE e AE)",
    descricao: "Diferença entre Autorização de Funcionamento de Empresa e Autorização Especial.",
    url: "farmacia-na-pratica/registro-na-anvisa-afe-ae.html",
    icone: '<path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/>',
    palavras_chave: ["afe", "ae", "anvisa", "autorização", "especial", "medicamentos", "drogarias"]
  },
  {
    id: 72,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "Certificado de Regularidade Técnica (CRF)",
    descricao: "Obrigatoriedade, emissão e como o CRF fiscaliza o profissional farmacêutico.",
    url: "farmacia-na-pratica/certificado-regularidade-tecnica-crf.html",
    icone: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
    palavras_chave: ["crf", "conselho", "farmácia", "regularidade técnica", "responsável", "crt"]
  },
  {
    id: 73,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "Alvará da Vigilância Sanitária (VISA)",
    descricao: "Exigências de estrutura física e boas práticas para aprovação na inspeção sanitária.",
    url: "farmacia-na-pratica/alvara-da-vigilancia-sanitaria.html",
    icone: '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    palavras_chave: ["vigilância sanitária", "visa", "alvará sanitário", "inspeção", "boas práticas"]
  },
  {
    id: 74,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "SNGPC: Sistema de Controlados",
    descricao: "Como funciona o Sistema Nacional de Gestão de Produtos Controlados e Antibióticos.",
    url: "farmacia-na-pratica/sngpc-sistema-de-controlados.html",
    icone: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    palavras_chave: ["sngpc", "controlados", "antibióticos", "tarja preta", "receita", "inventário"]
  },
  {
    id: 75,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "Responsabilidade Técnica (Farmacêutico)",
    descricao: "A obrigatoriedade da presença do Farmacêutico durante todo o horário de funcionamento.",
    url: "farmacia-na-pratica/responsabilidade-tecnica-farmaceutico.html",
    icone: '<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
    palavras_chave: ["farmacêutico", "rt", "responsável técnico", "presença", "horário", "ausência"]
  },
  {
    id: 76,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "Descarte de Medicamentos e PGRSS",
    descricao: "Plano de Gerenciamento de Resíduos de Serviços de Saúde e logística reversa.",
    url: "farmacia-na-pratica/descarte-de-medicamentos-pgrss.html",
    icone: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
    palavras_chave: ["descarte", "lixo", "pgrss", "resíduos", "vencidos", "logística reversa"]
  },
  {
    id: 77,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "Programa Farmácia Popular do Brasil",
    descricao: "Como cadastrar sua farmácia no programa e regras para dispensação subsidiada.",
    url: "farmacia-na-pratica/programa-farmacia-popular.html",
    icone: '<path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7z"/><line x1="8.5" y1="8.5" x2="15.5" y2="15.5"/>',
    palavras_chave: ["farmácia popular", "pfpb", "governo", "subsídio", "gratuidade", "cadastro"]
  },
  {
    id: 78,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "Medicamentos Monofásicos de PIS/COFINS",
    descricao: "Não pague imposto em dobro: como segregar a venda de remédios no Simples Nacional.",
    url: "farmacia-na-pratica/medicamentos-monofasicos.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["monofásico", "pis cofins", "segregação", "imposto reduzido", "cadastro produto", "remédio"]
  },
  {
    id: 79,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "PBM (Programa de Benefício em Medicamentos)",
    descricao: "Redes credenciadas (Funcional, Vidalink, etc.) e o impacto financeiro no balcão.",
    url: "farmacia-na-pratica/pbm-programa-beneficio.html",
    icone: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>',
    palavras_chave: ["pbm", "benefício", "desconto", "laboratório", "vidalink", "funcional", "epharma"]
  },
  {
    id: 80,
    modulo: 8,
    moduloNome: "Farmácia na Prática",
    titulo: "Fiscalização do CRF: O que fazer em caso de multa",
    descricao: "Procedimentos de defesa, prazos e justificativas de ausência do Farmacêutico.",
    url: "farmacia-na-pratica/fiscalizacao-crf-multas.html",
    icone: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
    palavras_chave: ["multa", "fiscalização", "crf", "infração", "defesa", "recurso", "ausência"]
  },

  /* ==========================================================
     MÓDULO 9 — SUPORTE E USO DA CONTABILIDADE
     Pasta: suporte-e-contabilidade/
     ========================================================== */
  {
    id: 81,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Como acessar o Portal do Cliente",
    descricao: "Aprenda a logar no sistema para baixar suas guias, holerites e enviar documentos.",
    url: "suporte-e-contabilidade/como-acessar-portal-do-cliente.html",
    icone: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
    palavras_chave: ["portal", "acesso", "login", "sistema", "plataforma", "cliente"]
  },
  {
    id: 82,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Cronograma de Envio de Documentos",
    descricao: "Prazos máximos mensais para você mandar as notas e extratos para não atrasar impostos.",
    url: "suporte-e-contabilidade/cronograma-de-envio.html",
    icone: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    palavras_chave: ["prazo", "data", "envio", "cronograma", "documentos", "dia de envio"]
  },
  {
    id: 83,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Como abrir um chamado de suporte (Tickets)",
    descricao: "Precisa de ajuda? Veja a forma mais rápida de ser atendido pelo nosso time especialista.",
    url: "suporte-e-contabilidade/abrir-chamado-suporte.html",
    icone: '<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>',
    palavras_chave: ["chamado", "ticket", "ajuda", "suporte", "atendimento", "dúvida", "falar com contador"]
  },
  {
    id: 84,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Atualização de Dados Cadastrais",
    descricao: "Mudou o e-mail financeiro ou telefone? Saiba como atualizar seu cadastro conosco.",
    url: "suporte-e-contabilidade/atualizacao-de-dados.html",
    icone: '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    palavras_chave: ["atualizar", "cadastro", "e-mail", "telefone", "endereço contato", "dados"]
  },
  {
    id: 85,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Pagamento de Honorários Contábeis",
    descricao: "Segunda via de boletos, datas de vencimento e dúvidas sobre o pacote contratado.",
    url: "suporte-e-contabilidade/pagamento-de-honorarios.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["honorários", "mensalidade", "boleto contador", "2 via", "vencimento"]
  },
  {
    id: 86,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Onde encontro meus impostos a pagar?",
    descricao: "Tutorial de como navegar pelas pastas do Portal do Cliente para achar suas guias DAS, ICMS, etc.",
    url: "suporte-e-contabilidade/onde-encontro-meus-impostos.html",
    icone: '<path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>',
    palavras_chave: ["achar imposto", "baixar guia", "onde fica", "portal", "das", "boleto"]
  },
  {
    id: 87,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Esqueci minha senha do Portal",
    descricao: "Instruções para realizar a recuperação de senha de forma rápida e segura.",
    url: "suporte-e-contabilidade/esqueci-minha-senha.html",
    icone: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>',
    palavras_chave: ["senha", "esqueci", "recuperar", "resetar", "bloqueado", "login"]
  },
  {
    id: 88,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Serviços Avulsos (Extras)",
    descricao: "Tabela de serviços não inclusos na mensalidade: alterações, certidões específicas, recálculos.",
    url: "suporte-e-contabilidade/servicos-avulsos-extras.html",
    icone: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
    palavras_chave: ["extra", "avulso", "serviço cobrado", "tabela", "custa", "honorário extra"]
  },
  {
    id: 89,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Troca de Contador (Transição)",
    descricao: "Como funciona o processo e o Termo de Transferência de Responsabilidade Técnica.",
    url: "suporte-e-contabilidade/troca-de-contador.html",
    icone: '<path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/>',
    palavras_chave: ["troca", "mudança", "transferência", "transição", "termo", "contador anterior"]
  },
  {
    id: 90,
    modulo: 9,
    moduloNome: "Suporte e Contabilidade",
    titulo: "Aplicativo da Domínio Farma Contabilidade",
    descricao: "Baixe nosso App para celular e tenha a contabilidade da sua farmácia na palma da mão.",
    url: "suporte-e-contabilidade/aplicativo-celular.html",
    icone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
    palavras_chave: ["aplicativo", "app", "celular", "mobile", "android", "iphone", "ios", "baixar"]
  },

  /* ==========================================================
     MÓDULO 10 — ALTERAÇÕES E ENCERRAMENTO
     Pasta: alteracoes-e-crescimento/
     ========================================================== */
  {
    id: 91,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Mudança de Endereço da Empresa",
    descricao: "O que precisa ser feito na Junta, Prefeitura e Receita Federal para mudar seu ponto.",
    url: "alteracoes-e-crescimento/mudanca-de-endereco.html",
    icone: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>',
    palavras_chave: ["mudança", "endereço", "ponto comercial", "local", "transferência"]
  },
  {
    id: 92,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Inclusão ou Saída de Sócios",
    descricao: "Procedimentos legais e custos para alterar a composição societária da sua empresa.",
    url: "alteracoes-e-crescimento/inclusao-saida-de-socios.html",
    icone: '<path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="23" y2="12"/><line x1="23" y1="8" x2="19" y2="12"/>',
    palavras_chave: ["sócio", "entrada", "saída", "alteração contratual", "venda cotas"]
  },
  {
    id: 93,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Inclusão de Novas Atividades (CNAE)",
    descricao: "Vai começar a vender produtos novos? Veja como incluir um novo CNAE no CNPJ.",
    url: "alteracoes-e-crescimento/inclusao-de-cnae.html",
    icone: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>',
    palavras_chave: ["cnae", "atividade", "inclusão", "novo produto", "ramo", "alteração"]
  },
  {
    id: 94,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Abertura de Filial",
    descricao: "Sua rede de farmácias está crescendo! Veja os passos para abrir o CNPJ da Filial.",
    url: "alteracoes-e-crescimento/abertura-de-filial.html",
    icone: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    palavras_chave: ["filial", "rede", "nova loja", "matriz", "expansão", "cnpj filial"]
  },
  {
    id: 95,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Alteração de Razão Social ou Nome Fantasia",
    descricao: "Mudou a marca? Saiba como legalizar o novo nome da sua empresa perante os órgãos.",
    url: "alteracoes-e-crescimento/alteracao-de-razao-social.html",
    icone: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
    palavras_chave: ["razão social", "nome fantasia", "marca", "alterar nome", "fachada"]
  },
  {
    id: 96,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Aumento de Capital Social",
    descricao: "Quando e por que fazer o registro formal de novos investimentos na empresa.",
    url: "alteracoes-e-crescimento/aumento-de-capital-social.html",
    icone: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>',
    palavras_chave: ["capital", "aumento", "investimento", "dinheiro", "aporte"]
  },
  {
    id: 97,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Desenquadramento: De MEI para ME",
    descricao: "Estourou o limite de faturamento? Veja como virar uma Microempresa do Simples Nacional.",
    url: "alteracoes-e-crescimento/desenquadramento-mei-para-me.html",
    icone: '<polyline points="13 2 13 9 20 9"/><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="9 16 12 13 15 16"/><line x1="12" y1="13" x2="12" y2="19"/>',
    palavras_chave: ["mei", "desenquadramento", "virar me", "limite", "estourou", "microempresa"]
  },
  {
    id: 98,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Suspensão Temporária de CNPJ (Inatividade)",
    descricao: "Vai parar as operações por um tempo? Como suspender a empresa e reduzir custos.",
    url: "alteracoes-e-crescimento/suspensao-temporaria-cnpj.html",
    icone: '<circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/>',
    palavras_chave: ["suspensão", "inativa", "paralisar", "temporário", "pausa cnpj"]
  },
  {
    id: 99,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Distrato Social (O que é?)",
    descricao: "O documento necessário para oficializar o fim da sociedade entre os parceiros de negócio.",
    url: "alteracoes-e-crescimento/distrato-social.html",
    icone: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><line x1="9" y1="15" x2="15" y2="9"/><line x1="9" y1="9" x2="15" y2="15"/>',
    palavras_chave: ["distrato", "fim", "sociedade", "término", "separação sócios", "contrato"]
  },
  {
    id: 100,
    modulo: 10,
    moduloNome: "Alterações e Crescimento",
    titulo: "Baixa e Encerramento Definitivo de Empresa",
    descricao: "Passo a passo, certidões necessárias e custos para fechar seu CNPJ de vez.",
    url: "alteracoes-e-crescimento/baixa-e-encerramento-de-empresa.html",
    icone: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
    palavras_chave: ["baixar cnpj", "fechar", "encerramento", "fim empresa", "distrato", "cancelar cnpj"]
  }

];
