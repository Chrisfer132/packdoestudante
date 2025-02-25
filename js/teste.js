const collegeData = {
    college1: {
        name: "Análise e Desenvolvimento de Sistemas",
        duration: "2 a 3 anos",
        cost: "R$ 500,00 a R$ 1500,00",
        areas: "Desenvolvimento de software, análise de sistemas, administração de banco de dados, gerenciamento de projetos de TI, desenvolvimento web e mobile, suporte técnico e help desk, consultoria em TI, segurança da informação, administração de redes, desenvolvimento de jogos digitais, business intelligence (BI), DevOps, arquitetura de sistemas e teste e qualidade de software, etc"
    },
    college2: {
        name: "Agronomia",
        duration: "5 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Produção agrícola, gestão ambiental, engenharia rural, controle de pragas e doenças, melhoramento genético de plantas, consultoria técnica, pesquisa e desenvolvimento, comercialização de insumos e produtos agrícolas, paisagismo e jardinagem, ensino e extensão rural, agroindústria e processamento de alimentos, irrigação e drenagem, além de planejamento e gestão de propriedades rurais, etc"
    },
    college3: {
        name: "Administração",
        duration: "4 anos",
        cost: "R$ 800,00 a R$ 2500,00",
        areas: "Gestão financeira, gestão de recursos humanos, marketing, logística, administração de produção, consultoria empresarial, planejamento estratégico, empreendedorismo, gestão de projetos, comércio exterior, auditoria e controle interno, gestão pública, administração hospitalar, e gestão de operações e processos, etc."
    },
    collage4: {    
        name: "Arquitetura e Urbanismo",
        duration: "5 anos",
        cost: "R$ 1.500 a R$ 4.000",
        areas: "Projeto arquitetônico, urbanismo e planejamento urbano, paisagismo, design de interiores, restauração e conservação de patrimônio histórico, gerenciamento de obras, consultoria e assessoria técnica, arquitetura sustentável, planejamento e desenvolvimento de loteamentos, iluminação arquitetônica, design de móveis e produtos, ensino e pesquisa, além de atuar em órgãos públicos e privados, construtoras, escritórios de arquitetura, empresas de engenharia, e autônomos, etc"
    },
    collage5: {    
        name: "Artes Visuais",
        duration: "4 anos",
        cost: "R$ 800,00 a R$ 2.500",
        areas: "Produção artística, curadoria e crítica de arte, ensino de artes, gestão cultural, ilustração, design gráfico, cenografia, direção de arte, conservação e restauração de obras de arte, mediação cultural, fotografia, produção audiovisual, desenvolvimento de projetos culturais, e atuação em museus, galerias, centros culturais, agências de publicidade, editoras, e como artista autônomo, etc."
    },
    collage6: {    
        name: "Automação Industrial",
        duration: "2 a 3 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Controle e automação de processos industriais, programação de controladores lógicos programáveis (CLPs), desenvolvimento e manutenção de sistemas de controle, e instrumentação industrial. Eles também podem atuar na manutenção e operação de sistemas automatizados, engenharia de processos, gestão de projetos de automação, e desenvolvimento de sistemas de visão artificial e robótica industrial. Além disso, podem se envolver na integração de sistemas de automação com tecnologias emergentes e oferecer consultoria técnica em automação. Esses profissionais frequentemente encontram oportunidades em indústrias de diversos setores, como automotivo, petroquímico, alimentício e farmacêutico, além de empresas especializadas em automação e tecnologia, etc."
    },
    collage7: {    
        name: "Automação Industrial",
        duration: "4 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Análises clínicas e laboratoriais, diagnóstico por imagem, biologia molecular e genética, pesquisa científica, imunologia, microbiologia, toxicologia, hematologia, biotecnologia, e gestão de qualidade em laboratórios. Além disso, podem trabalhar em hospitais, clínicas, laboratórios de diagnóstico, centros de pesquisa, indústrias farmacêuticas e de biotecnologia, e instituições de ensino e pesquisa, etc."
    },
    collage8: {    
        name: "Ciência da Computação",
        duration: "4 a 5 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Desenvolvimento de software, engenharia de sistemas, banco de dados, inteligência artificial, segurança da informação, redes de computadores, desenvolvimento de aplicativos e jogos, ciência de dados, sistemas embarcados, consultoria em TI, e análise de sistemas. Eles podem trabalhar em empresas de tecnologia, startups, instituições financeiras, indústrias, centros de pesquisa, e em empresas de consultoria e desenvolvimento de software, etc."
    },
    collage9: {    
        name: "Ciências Biológicas",
        duration: "4 anos",
        cost: "R$ 800,00 a R$ 2.500",
        areas: "Pesquisa científica em biologia molecular, genética, ecologia e evolução, biotecnologia, microbiologia, imunologia, zoologia, botânica, e conservação ambiental. Eles também podem trabalhar em instituições de ensino e pesquisa, laboratórios de análises clínicas, empresas de biotecnologia e farmacêuticas, órgãos governamentais e ONGs voltadas para meio ambiente e saúde, e em consultoria ambiental e gestão de recursos naturais, etc."
    },
    collage10: {    
        name: "Ciências Contábeis",
        duration: "4 anos",
        cost: "R$ 800,00 a R$ 2.500",
        areas: "Contabilidade financeira, auditoria, contabilidade gerencial, consultoria tributária e fiscal, perícia contábil, análise e controle de custos, planejamento financeiro, e gestão de riscos. Eles podem trabalhar em empresas de diversos setores, escritórios de contabilidade, órgãos públicos, instituições financeiras, e como autônomos, oferecendo serviços contábeis e financeiros, etc."
    },
    collage11: {    
        name: "Ciências Econômicas",
        duration: "4 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Análise econômica, planejamento financeiro, consultoria econômica, pesquisa econômica, economia internacional, políticas públicas, gestão de riscos, análise de investimentos, e desenvolvimento econômico. Eles podem trabalhar em instituições financeiras, órgãos governamentais, empresas privadas, organizações não governamentais (ONGs), e em empresas de consultoria econômica e financeira, etc."
    },
    collage12: {    
        name: "Cinema e Mídias Sociais",
        duration: "3 a 4 anos",
        cost: "R$ 1.500 a R$ 4.000",
        areas: "Produção e direção de filmes e vídeos, roteirismo, edição e pós-produção, fotografia e videografia, gestão de mídias sociais, marketing digital, criação de conteúdo audiovisual, estratégias de engajamento online, análise de dados de mídias sociais, e desenvolvimento de campanhas publicitárias. Eles podem trabalhar em estúdios de cinema, agências de publicidade e marketing, produtoras de vídeo, empresas de comunicação, plataformas de streaming, e como freelancers ou empreendedores na criação e gestão de conteúdo para redes sociais e outros meios digitais, etc."
    },
    collage13: {    
        name: "Cinema e Mídias Sociais",
        duration: "4 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Logística internacional, importação e exportação, negociação de contratos internacionais, análise de mercado global, gestão de operações de comércio exterior, compliance e regulamentação aduaneira, consultoria em comércio exterior, e desenvolvimento de estratégias de internacionalização. Eles podem trabalhar em empresas que operam no comércio internacional, despachantes aduaneiros, agências de exportação e importação, empresas de logística, instituições financeiras, e órgãos governamentais relacionados ao comércio e à economia, etc."
    },
    collage14: {    
        name: "Design de Modas",
        duration: "3 a 4 anos",
        cost: "R$ 1.500 a R$ 4.000",
        areas: "Criação e desenvolvimento de coleções, modelagem e produção de peças de vestuário, estilismo, consultoria de moda, gestão de marcas e tendências, produção de desfiles e eventos de moda, e marketing de moda. Eles podem trabalhar em empresas de moda, ateliês, marcas de vestuário, revistas e mídias especializadas em moda, agências de publicidade, e como autônomos ou empreendedores na criação e gestão de suas próprias marcas e linhas de produtos, etc."
    },
    collage15: {    
        name: "Design Gráfico",
        duration: "3 a 4 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Criação de identidade visual, design de logotipos, desenvolvimento de materiais gráficos (como brochuras, cartazes e embalagens), design digital e para web, criação de interfaces e experiências de usuário (UI/UX), ilustração, design editorial, e produção de conteúdo visual para mídias sociais. Eles podem trabalhar em agências de design, estúdios de criação, empresas de marketing e publicidade, editoras, departamentos de comunicação e branding, e como freelancers ou empreendedores, oferecendo serviços de design para uma variedade de clientes e projetos, etc."
    },
    collage16: {    
        name: "Direito",
        duration: "5 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Advocacia (em diferentes especialidades, como direito penal, civil, trabalhista, empresarial, entre outros), consultoria jurídica, assessoria em empresas e organizações, magistratura (como juiz), promotoria (como promotor de justiça), defensoria pública, mediação e arbitragem, e pesquisa jurídica. Eles podem trabalhar em escritórios de advocacia, órgãos públicos, empresas privadas, tribunais, e como autônomos ou empreendedores no campo jurídico, etc."
    },
    collage17: {    
        name: "Educação Física",
        duration: "4 a 5 anos",
        cost: "R$ 500,00 a R$ 2.000",
        areas: "Trabalhar em escolas desenvolvendo atividades físicas para crianças e adolescentes, atuar em clubes esportivos e academias como treinador ou personal trainer, trabalhar em clínicas e hospitais na área de reabilitação e fisioterapia (com especialização adicional), coordenar atividades recreativas e esportivas em centros comunitários, desenvolver programas de saúde e qualidade de vida, gerenciar e coordenar eventos esportivos e programas de atividades, ensinar e realizar pesquisas em instituições de ensino superior, e oferecer consultoria para otimização de desempenho físico e esportivo, etc."
    },
    collage18: {    
        name: "Educação Especial",
        duration: "4 a 5 anos",
        cost: "R$ 500,00 a R$ 2.000",
        areas: "Atuar em escolas, oferecendo suporte a alunos com necessidades especiais, realizar acompanhamento psicopedagógico, prestar consultoria para práticas inclusivas, desenvolver material didático adaptado, trabalhar em reabilitação e terapia (com especializações adicionais), formar e orientar professores, e colaborar com organizações e ONGs dedicadas à inclusão e defesa dos direitos das pessoas com deficiência, etc."
    },
    collage19: {    
        name: "Educação em Libras",
        duration: "4 anos",
        cost: "R$ 500,00 a R$ 2.000",
        areas: "Atuar em escolas, oferecendo suporte a alunos com necessidades especiais, realizar acompanhamento psicopedagógico, prestar consultoria para práticas inclusivas, desenvolver material didático adaptado, trabalhar em reabilitação e terapia (com especializações adicionais), formar e orientar professores, e colaborar com organizações e ONGs dedicadas à inclusão e defesa dos direitos das pessoas com deficiência, etc."
    },
    collage20: {    
        name: "Filosofia",
        duration: "4 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Ensino, pesquisa acadêmica, consultoria, produção editorial, crítica cultural, assessoria política, e atuação em ONGs ou empresas focadas em responsabilidade social."
    },
    collage21: {    
        name: "Física",
        duration: "4 anos",
        cost: "R$ 700,00 a R$ 2.000",
        areas: "Ensino, pesquisa científica, desenvolvimento tecnológico, consultoria, indústria (eletrônica, energia, telecomunicações), análise de dados, meteorologia, e atuação em instituições financeiras ou de saúde, entre outras."
    },
    collage22: {    
        name: "Fisioterapia",
        duration: "4 a 5 anos",
        cost: "R$ 800,00 a R$ 2.500",
        areas: " Clínicas e consultórios de fisioterapia, hospitais, centros de reabilitação, esportes, fisioterapia respiratória, neurologia, ortopedia e traumatologia, geriatria, saúde pública, e atuação em empresas e academias."
    },
    collage23: {    
        name: "Farmácia",
        duration: "5 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Farmácias e drogarias, indústria farmacêutica, análises clínicas, laboratórios de controle de qualidade, pesquisa e desenvolvimento de medicamentos, hospitais, farmácia clínica, vigilância sanitária, distribuição de medicamentos, e consultoria."
    },
    collage24: {    
        name: "Fonoaudiologia",
        duration: "4 a 5 anos",
        cost: "R$ 1.000 a R$ 2.500",
        areas: "clínicas e consultórios de fonoaudiologia, hospitais, centros de reabilitação, escolas (fonoaudiologia educacional), empresas (fonoaudiologia ocupacional), pesquisa, audiologia, terapia de linguagem e comunicação, terapia vocal, terapia para distúrbios de aprendizagem, e atuação em instituições voltadas para a saúde e bem-estar."
    },
    collage25: {    
        name: "Gestão Ambiental",
        duration: "2 a 4 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Consultoria ambiental, licenciamento ambiental, gestão de resíduos, auditoria ambiental, recuperação de áreas degradadas, educação ambiental, responsabilidade social corporativa, sustentabilidade empresarial, gestão de unidades de conservação, e atuação em ONGs e órgãos públicos relacionados ao meio ambiente."
    },
    collage26: {    
        name: "Gestão de Qualidade",
        duration: "2 a 3 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Controle de qualidade em indústrias, auditoria de qualidade, certificações (ISO, por exemplo), consultoria em qualidade, gestão de processos, melhoria contínua, segurança do trabalho, gestão de projetos, e atuação em setores de produção, serviços, e logística."
    },
    collage27: {    
        name: "Gestão de Recursos Humanos",
        duration: "2 a 3 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Recrutamento e seleção, treinamento e desenvolvimento, administração de pessoal, gestão de benefícios, planejamento de carreira, desenvolvimento organizacional, relações trabalhistas, gestão de clima organizacional, consultoria em RH, e atuação em empresas de diversos setores, agências de emprego, e consultorias."
    },
    collage28: {    
        name: "Gastronomia",
        duration: "2 a 4 anos",
        cost: "R$ 800,00 a R$ 2.500",
        areas: "Restaurantes, hotéis, buffets, confeitaria, panificação, consultoria gastronômica, gestão de alimentos e bebidas, catering, crítica gastronômica, desenvolvimento de produtos alimentícios, ensino de gastronomia, e atuação em programas de TV, revistas, e eventos gastronômicos."
    },
    collage29: {    
        name: "História",
        duration: "4 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "ensino, pesquisa histórica, preservação do patrimônio histórico, museus e centros culturais, arqueologia, consultoria para produções culturais (cinema, TV, teatro), edição e publicação de materiais educativos, assessoria em projetos de memória institucional, curadoria de exposições, e atuação em ONGs e órgãos públicos voltados para a cultura e educação."
    },
    collage30: {    
        name: "Jornalismo",
        duration: "4 anos",
        cost: "R$ 800,00 a R$ 2.500",
        areas: "redação e reportagem para jornais, revistas, sites e portais de notícias, televisão, rádio, assessoria de imprensa, comunicação corporativa, produção de conteúdo digital, revisão e edição de textos, jornalismo investigativo, atuação em ONGs e instituições públicas, e gestão de redes sociais."
    },
    collage31: {    
        name: "Letras",
        duration: "4 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Ensino de línguas (português e/ou línguas estrangeiras), tradução e interpretação, revisão e edição de textos, produção editorial, consultoria linguística, produção de material didático, pesquisa acadêmica, atuação em escolas de idiomas, e assessoria para empresas e instituições em questões de linguagem e comunicação."
    },
    collage32: {    
        name: "Matemática",
        duration: "4 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Ensino de matemática (em escolas e cursinhos), pesquisa acadêmica, análise de dados, estatística, atuária, consultoria em finanças e negócios, desenvolvimento de software e algoritmos, matemática aplicada (engenharia, física, economia), e atuação em instituições de pesquisa e tecnologia."
    },
    collage33: {    
        name: "Medicina",
        duration: "6 anos",
        cost: "R$ 6.000 a R$ 15.000",
        areas: "Clínica médica, cirurgia, pediatria, ginecologia e obstetrícia, psiquiatria, cardiologia, ortopedia, neurologia, medicina de família e comunidade, hospitais, consultórios particulares, clínicas especializadas, pesquisa médica, e atuação em instituições de saúde pública e privadas."
    },
    collage34: {    
        name: "Medicina Veterinária",
        duration: "5 anos",
        cost: "R$ 1.500 a R$ 5.000",
        areas: "clínicas e hospitais veterinários, consultórios de animais de companhia, medicina de grandes animais (bovinos, equinos), saúde pública (controle de zoonoses), pesquisa em saúde animal, indústria de produtos veterinários, controle de qualidade de alimentos, conservação e manejo de fauna silvestre, e atuação em ONGs e instituições de proteção animal."
    },
    collage35: {    
        name: "Nutrição",
        duration: "4 anos",
        cost: "R$ 800,00 a R$ 2.000",
        areas: "Consultoria e atendimento em clínicas e consultórios, hospitais, unidades de saúde pública, empresas (nutrição corporativa), indústria alimentícia (desenvolvimento de produtos, controle de qualidade), academias e centros de bem-estar, educação e pesquisa, planejamento alimentar e nutricional, e atuação em programas de saúde e prevenção de doenças."
    },
    collage36: {    
        name: "Odontologia",
        duration: "5 anos",
        cost: "R$ 1.500 a R$ 5.000",
        areas: "Clínicas e consultórios odontológicos, hospitais, centros de reabilitação oral, ensino e pesquisa acadêmica, ortodontia, periodontia, endodontia, cirurgia bucomaxilofacial, odontopediatria, prótese dentária, e atuação em programas de saúde pública e empresas de produtos odontológicos."
    },
    collage37: {    
        name: "Produção Audiovisual",
        duration: "3 a 4 anos",
        cost: "R$ 800,00 a R$ 2.500",
        areas: "produção de filmes e vídeos, direção e roteirização, edição e pós-produção, fotografia e cinematografia, produção de conteúdo para TV e streaming, desenvolvimento de projetos audiovisuais, gestão de eventos, publicidade e propaganda, e atuação em estúdios de gravação e empresas de mídia."
    },
    collage38: {    
        name: "Química",
        duration: "4 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Indústria química (fabricação de produtos químicos e petroquímicos), pesquisa e desenvolvimento, controle de qualidade, análises laboratoriais, farmacêutica, ensino, consultoria ambiental, química forense, e atuação em empresas de cosméticos e alimentos."
    },
    collage39: {    
        name: "Relações Internacionais",
        duration: "4 anos",
        cost: "R$ 1.000 a R$ 3.000",
        areas: "Diplomacia, assessoria política, consultoria internacional, organizações não governamentais (ONGs), comércio exterior, análise de políticas públicas, pesquisa e análise de conflitos, desenvolvimento internacional, organismos internacionais (ONU, FMI, etc.), e atuação em empresas multinacionais e instituições financeiras."
    },
    collage40: {    
        name: "Sistemas de Informação",
        duration: "4 anos",
        cost: "R$ 800,00 a R$ 2.000",
        areas: "Desenvolvimento e manutenção de software, análise e gerenciamento de sistemas, administração de bancos de dados, segurança da informação, consultoria em TI, gerenciamento de projetos de TI, suporte técnico, arquitetura de sistemas, e atuação em empresas de tecnologia, consultorias e departamentos de TI de empresas."

    },
    collage41: {    
        name: "Serviços Sociais",
        duration: "4 anos",
        cost: "R$ 500,00 a R$ 1.500",
        areas: "Assistência social, trabalho em ONGs e instituições de caridade, serviços de proteção e acolhimento, políticas públicas, consultoria e planejamento social, atendimento a famílias e indivíduos em situação de vulnerabilidade, promoção de direitos humanos, educação e orientação social, e atuação em centros de referência e instituições de saúde e educação."
    },
    collage42: {    
        name: "Terapia Ocupacional",
        duration: "4 a 5 anos",
        cost: "R$ 1.000 a R$ 2.500",
        areas: "Clínicas de terapia ocupacional, hospitais, centros de reabilitação, escolas (terapia ocupacional educacional), instituições de cuidados para idosos, consultoria em ergonomia, reabilitação física e mental, atuação em programas de saúde pública, e suporte a pacientes com deficiências e transtornos mentais."
    },
    collage43: {    
        name: "Zootecnia",
        duration: "4 a 5 anos",
        cost: "R$ 800,00 a R$ 2.500",
        areas: "Gestão e produção animal, melhoramento genético, nutrição e alimentação animal, saúde e manejo de animais, produção de leite e carne, pesquisa e desenvolvimento de produtos zootécnicos, consultoria em agropecuária, administração de fazendas e propriedades rurais, e atuação em indústrias de ração e produtos veterinários."
    }, 
};

function displayCollegeInfo(collegeId) {
    const college = collegeData[collegeId];
    document.getElementById('collegeModalLabel').textContent = college.name;
    document.getElementById('duration').textContent = "Duração: " + college.duration;
    document.getElementById('cost').textContent = "Custo: " + college.cost;
    document.getElementById('areas').textContent = "Áreas de atuação: " + college.areas;
    $('#collegeModal').modal('show');
}

function searchColleges() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const collegeList = document.getElementById('collegeList');
    collegeList.innerHTML = '';
    
    for (const collegeId in collegeData) {
        const college = collegeData[collegeId];
        if (college.name.toLowerCase().includes(searchInput)) {
            const collegeCard = document.createElement('div');
            collegeCard.className = 'college-card';
            collegeCard.textContent = college.name;
            collegeCard.onclick = () => displayCollegeInfo(collegeId);
            collegeList.appendChild(collegeCard);
        }
    }
}

// Inicializa a lista de faculdades quando a página é carregada
searchColleges();

