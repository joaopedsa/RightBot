export default () => [
        {
            short: "Relações Trabalhistas (RT)",
            parent: undefined,
            title: "Relações Trabalhistas (RT)",
            brief: "Ok. Aqui estão alguns conteúdos sobre os quais eu talvez possa ajudar:",
            synonyms: ["relações trabalhistas", "RT", "trabalhistas"],
            intent: undefined,
            assuntos: ['relacoes trabalhistas'],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
        {
            short: "Salário",
            parent: "Relações Trabalhistas (RT)",
            title: "Salário",
            brief: undefined,
            synonyms: [],
            intent: undefined,
            assuntos: ['salario'],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Data de Recebimento",
            parent: "Salário",
            title: "Data de Recebimento do Salário",
            brief: undefined,
            synonyms: [],
            intent: 'recebimento',
            assuntos: ['salario'],
            answer: "A empresa realizará o pagamento até o 5o dia útil do mês subsequente ao trabalhado.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Descontos",
            parent: "Salário",
            title: "Descontos do Salário",
            brief: undefined,
            synonyms: [],
            intent: 'descontos',
            assuntos: ['salario'],
            answer: "Os descontos obrigatórios em uma folha de pagamento são:\n\n- INSS: A quantia varia entre 8% e 11% dependendo do valor do seu salário bruto, com um limite de R$ 642,34 por contribuição (atualiza anualmente);\n\n- IRRF: A alíquota varia de acordo a sua remuneração — abaixo de R$ 1.903,98 não há desconto (atualiza anualmente) e o percentual máximo é de 27,5%;\n\n- Benefícios: valor de VT, VA/VR (PAT), Planos de Saúde, etc.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
        {
            short: "Décimo Terceiro",
            parent: "Relações Trabalhistas (RT)",
            title: "Décimo Terceiro",
            brief: undefined,
            synonyms: [],
            intent: undefined,
            assuntos: ['decimo terceiro'],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Data de Recebimento",
            parent: "Décimo Terceiro",
            title: "Data de Recebimento do Décimo Terceiro",
            brief: undefined,
            synonyms: [],
            intent: 'recebimento',
            assuntos: ['decimo terceiro'],
            answer: "O 13º salário deve ser pago em duas parcelas. A primeira, até dia 30 de novembro e a segunda, até dia 20 de dezembro.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Descontos",
            parent: "Décimo Terceiro",
            title: "Descontos do Décimo Terceiro",
            brief: undefined,
            synonyms: [],
            intent: 'descontos',
            assuntos: ['decimo terceiro'],
            answer: "O valor da primeira parcela do 13o salário corresponde a 50% do salário base do mês vigente mais as médias de Horas extras e Comissões, sem descontos.\n\nO valor da segunda parcela será o valor do salário bruto do mês de dezembro descontando-se:\n\n- a primeira parcela\n- INSS\n- Imposto de Renda (IR)\n- Pensão (se houver).\n\nCaso você tenha entrado na empresa ao longo deste ano, o valor do 13o salário será proporcional ao número de meses trabalhados. (só recebe o mês se tiver mais de 15 dias trabalhados)",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Valor Recebido",
            parent: "Décimo Terceiro",
            title: "Valor Recebido de Décimo Terceiro",
            brief: undefined,
            synonyms: [],
            intent: "recebimento",
            assuntos: ['decimo terceiro'],
            answer: "O valor da primeira parcela do 13o salário corresponde a 50% do salário base do mês vigente mais as médias de Horas extras e Comissões, sem descontos.\n\nO valor da segunda parcela será o valor do salário bruto do mês de dezembro descontando-se:\n\n- a primeira parcela\n- INSS\n- Imposto de Renda (IR)\n- Pensão (se houver).\n\nCaso você tenha entrado na empresa ao longo deste ano, o valor do 13o salário será proporcional ao número de meses trabalhados. (só recebe o mês se tiver mais de 15 dias trabalhados)",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
    
        {
            short: "Férias",
            parent: "Relações Trabalhistas (RT)",
            title: "Férias",
            brief: undefined,
            synonyms: ['relações trabalhistas', 'rt'],
            intent: undefined,
            assuntos: [],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Solicitação",
            parent: "Férias",
            title: "Solicitação de Férias",
            brief: undefined,
            synonyms: ['solicitar', 'pedir'],
            intent: 'solicitacao',
            assuntos: ['ferias'],
            answer: "Para solicitar suas férias, avisar sua gerência e enviar um email para rh@empresa.com informando o período.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Parcelamento de Férias",
            parent: "Férias",
            title: "Parcelamento de Férias",
            brief: undefined,
            synonyms: ['parcelar', 'parcelamento', 'dividir', 'divisão', 'fracionar', 'fracionamento'],
            intent: 'parcelamento',
            assuntos: ['ferias'],
            answer: "É possível dividir suas férias em 2 períodos. Consultar regra detalhada no portal.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Venda de Férias",
            parent: "Férias",
            title: "Venda de Férias",
            brief: undefined,
            synonyms: ['venda'],
            intent: 'venda',
            assuntos: ['ferias'],
            answer: "É possível vender suas férias. Consultar regra detalhada no portal.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Salário Durante as Férias",
            parent: "Férias",
            title: "Valor do Salário Recebido Durante as Férias",
            brief: undefined,
            synonyms: ['durante as férias', 'recebido durante as férias'],
            intent: 'recebimento',
            assuntos: ['salario', 'ferias'],
            answer: "As férias nada mais é que a antecipação do seu salário, acrescido de 1/3, portanto você não receberá novamente esse valor em seu holerite.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
    
    
        {
            short: "Benefícios",
            parent: undefined,
            title: "Benefícios",
            brief: "Aqui tem muita coisa que eu sei explicar. Afinal, a oferecemos diversos benefícios para nossos colaboradores, e cada um deles tem as suas características. Escolha no menu abaixo o benefício sobre o qual você deseja saber mais:",
            synonyms: [],
            intent: undefined,
            assuntos: ['beneficios'],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
        {
            short: "Vale Transporte (VT)",
            parent: "Benefícios",
            title: "Vale Transporte",
            brief: undefined,
            synonyms: ["vale transporte", "vt", "transporte"],
            intent: undefined,
            assuntos: [],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Consulta de Extrato e Saldo",
            parent: "Vale Transporte",
            title: "Consulta de Extrato e Saldo do Vale Transporte",
            brief: undefined,
            synonyms: [],
            intent: 'consulta de extrato e saldo',
            assuntos: ['vale transporte'],
            answer: 'A consulta do saldo do VT em florianópolis deve ser feito na máquina do SETUF. A consulta do extrato deve ser feita diretamente no balcão do SETUF.',
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Descontos",
            parent: "Vale Transporte",
            title: "Descontos do Vale Transporte",
            brief: undefined,
            synonyms: [],
            intent: 'descontos',
            assuntos: ['vale transporte'],
            answer: 'A primeira carga do VT é feita dia 01/mês sem desconto. A segunda carga que é feita dia 16/mês terá desconto de ausências da penúltima ficha ponto.',
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Cancelamento",
            parent: "Vale Transporte",
            title: "Cancelamento do Vale Transporte",
            brief: undefined,
            synonyms: [],
            intent: 'cancelamento',
            assuntos: ['vale transporte'],
            answer: 'Para cancelar o benefício do Vale Transporte, solicitar diretamente no balcão do RH para que sua assinatura seja coletada.',
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Solicitação",
            parent: "Vale Transporte",
            title: "Solicitação do Vale Transporte",
            brief: undefined,
            synonyms: ['solicitar', 'aderir'],
            intent: 'solicitacao',
            assuntos: ['vale transporte'],
            answer: 'A solicitação deve ser feita diretamente no balcão do RH levando um comprovante de residência',
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
        {
            short: "Vale Alimentação",
            parent: "Benefícios",
            title: "Vale Alimentação",
            brief: undefined,
            synonyms: ["va", "vr", "alimentação", "refeição"],
            intent: undefined,
            assuntos: [],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Valor Recebido",
            parent: "Vale Alimentação",
            title: "Valor Recebido de Vale Alimentação",
            brief: undefined,
            synonyms: [],
            intent: "recebimento",
            assuntos: ['vale alimentacao'],
            answer: "O valor recebido do VA / VR é definido pela carga horária. A carga é creditada todo dia 01/mês. O cálculo é feito do valor mensal menos as ausências do período de desconto (penúltima ficha ponto).",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Descontos",
            parent: "Vale Alimentação",
            title: "Descontos do Vale Alimentação",
            brief: undefined,
            synonyms: [],
            intent: "descontos",
            assuntos: ['vale alimentacao'],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Consulta de Extrato e Saldo",
            parent: "Vale Alimentação",
            title: "Consulta de Extrato e Saldo do Vale Alimentação",
            brief: undefined,
            synonyms: [],
            intent: "consulta de extrato e saldo",
            assuntos: ['vale alimentacao'],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
    
        {
            short: "Plano Odontológico",
            parent: "Benefícios",
            title: "Plano Odontológico",
            brief: undefined,
            synonyms: ["odontológico"],
            intent: undefined,
            assuntos: [],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Mensalidade / Valores",
            parent: "Plano Odontológico",
            title: "Mensalidade do Plano Odontológico",
            brief: undefined,
            synonyms: ["mensalidade", "valores"],
            intent: "custo",
            assuntos: ["plano odontologico"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Requisitos para Aderir",
            parent: "Plano Odontológico",
            title: "Requisitos para Aderir ao Plano Odontológico",
            brief: undefined,
            synonyms: ["requisitos"],
            intent: "requisitos",
            assuntos: ["plano odontologico"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Adesão",
            parent: "Plano Odontológico",
            title: "Adesão ao Plano Odontológico",
            brief: undefined,
            synonyms: ["solicitação"],
            intent: "solicitacao",
            assuntos: ["plano odontologico"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Cancelamento",
            parent: "Plano Odontológico",
            title: "Cancelamento do Plano Odontológico",
            brief: undefined,
            synonyms: [],
            intent: "cancelamento",
            assuntos: ["plano odontologico"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Coberturas",
            parent: "Plano Odontológico",
            title: "Coberturas do Plano Odontológico",
            brief: undefined,
            synonyms: [],
            intent: "coberturas",
            assuntos: ["plano odontologico"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
        {
            short: "Plano de Saúde",
            parent: "Benefícios",
            title: "Plano de Saúde",
            brief: undefined,
            synonyms: [],
            intent: undefined,
            assuntos: [],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Mensalidade / Valores",
            parent: "Plano de Saúde",
            title: "Mensalidade do Plano de Saúde",
            brief: undefined,
            synonyms: ["mensalidade", "valores"],
            intent: "custo",
            assuntos: ["plano de saude"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Requisitos para Aderir",
            parent: "Plano de Saúde",
            title: "Requisitos para Aderir ao Plano de Saúde",
            brief: undefined,
            synonyms: ["requisitos"],
            intent: "requisitos",
            assuntos: ["plano de saude"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Adesão",
            parent: "Plano de Saúde",
            title: "Adesão ao Plano de Saúde",
            brief: undefined,
            synonyms: ["solicitação"],
            intent: "solicitacao",
            assuntos: ["plano de saude"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Cancelamento",
            parent: "Plano de Saúde",
            title: "Cancelamento do Plano de Saúde",
            brief: undefined,
            synonyms: [],
            intent: "cancelamento",
            assuntos: ["plano de saude"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Coberturas",
            parent: "Plano de Saúde",
            title: "Coberturas do Plano de Saúde",
            brief: undefined,
            synonyms: [],
            intent: "coberturas",
            assuntos: ["plano de saude"],
            answer: "Resposta não cadastrada.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
        {
            short: "Licenças e Atestados",
            parent: undefined,
            title: "Licenças e Atestados",
            brief: "Nosso objetivo é simplificar ao máximo a entrega de documentos e agendamento de exames periódicos. Para isso, é importante que você observe os procedimentos corretos. Selecione o item que corresponde à sua necessidade:",
            synonyms: ["licenças", "atestados"],
            intent: undefined,
            assuntos: ['licencas e atestados'],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
    
        {
            short: "Atestado",
            parent: "Licenças e Atestados",
            title: "Atestado",
            brief: undefined,
            synonyms: [],
            intent: undefined,
            assuntos: [],
            answer: undefined,
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Entrega",
            parent: "Atestado",
            title: "Entrega de Atestado",
            brief: undefined,
            synonyms: [],
            intent: "entrega",
            assuntos: ["atestado"],
            answer: "**Prazos de entrega:**\n- Atestados de 1 dia ou Declaração de comparecimento: Entrega em 24 horas após o término;\n- Atestados de 2 dias: Entrega em 24 horas após o término;\n- Atestados de 3 dias ou mais: Entregar em até 72 horas após emissão do atestado;\n\n**Meios de entrega:**\n- Presencial: Deve ser entregue a via original ou cópia autenticada em cartório.\n- Via WhatsApp: Conversar com o número (48)x xxxx-xxxx. Nesse caso você também deve entregar a via original ou cópia autenticada em cartório em até 72 horas.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Licença Maternidade",
            parent: "Licenças e Atestados",
            title: "Licença Maternidade",
            brief: undefined,
            synonyms: [],
            intent: undefined,
            assuntos: ["licenca maternidade"],
            answer: "A Licença Maternidade pode ser entregue via portal digital pelo número (48) x xxxx-xxxx.",
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        },
        {
            short: "Lugares para Visitar",
            parent: undefined,
            title: "Lugares para Visitar",
            brief: undefined,
            synonyms: ["lugares"],
            intent: "lugares para visitar",
            assuntos: [],
            answer: "Opcional",
            medias: [
                {
                    url: "lugares-para-visitar/ribeirao-da-ilha.jpg",
                    text: "O centro histórico, sede da antiga Freguesia, é um dos mais antigos núcleos de colonização açoriana, fundado em meados do século XVIII."
                },
                {
                    url: "teste.jpg",
                    text: "Essa é a descrição da imagem teste.jpg"
                }
            ],
            id_bot: 'c159e865-5c57-4f40-b08e-01f77f396d27'
        }
    ]