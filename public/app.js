const receitas = [
    {
        id: 1,
        nome: "Bruschetta Clássica",
        categoria: "entradas",
        imagem_principal: "imagens/card_placeholder_1.png",
        descricao_curta: "Deliciosas torradas italianas com tomate fresco, alho e manjericão.",
        tempo_preparo: "15 minutos",
        porcoes: "4 pessoas",
        ingredientes: [
            { nome: "Pão italiano", quantidade: "4 fatias grossas" },
            { nome: "Tomates maduros", quantidade: "2 grandes, picados" },
            { nome: "Dentes de alho", quantidade: "2" },
            { nome: "Folhas de manjericão fresco", quantidade: "a gosto" },
            { nome: "Azeite extra virgem", quantidade: "a gosto" },
            { nome: "Sal e pimenta do reino", quantidade: "a gosto" }
        ],
        modo_preparo: [
            "Corte os tomates em cubos pequenos, tempere com sal, pimenta e um fio de azeite. Adicione o manjericão picado.",
            "Toste as fatias de pão em uma frigideira ou forno até ficarem douradas.",
            "Esfregue um dente de alho em cada fatia de pão tostado.",
            "Cubra as torradas com a mistura de tomate.",
            "Regue com um pouco mais de azeite e sirva imediatamente."
        ],
        fotos_adicionais: [
            { url: "imagens/detalhe_bruschetta_1.png", titulo: "Ingredientes Frescos" },
            { url: "imagens/detalhe_bruschetta_2.png", titulo: "Preparo das Bruschettas" }
        ],
        popular: true
    },
    {
        id: 2,
        nome: "Salmão Grelhado com Legumes",
        categoria: "pratos_principais",
        imagem_principal: "imagens/card_placeholder_2.png",
        descricao_curta: "Salmão suculento grelhado, acompanhado de legumes frescos e saborosos.",
        tempo_preparo: "30 minutos",
        porcoes: "2 pessoas",
        ingredientes: [
            { nome: "Filés de salmão", quantidade: "2 (cerca de 180g cada)" },
            { nome: "Aspargos frescos", quantidade: "1 maço" },
            { nome: "Tomates cereja", quantidade: "1 xícara" },
            { nome: "Azeite extra virgem", quantidade: "3 colheres de sopa" },
            { nome: "Suco de limão", quantidade: "1 colher de sopa" },
            { nome: "Sal e pimenta do reino", quantidade: "a gosto" },
            { nome: "Ervas finas (opcional)", quantidade: "a gosto" }
        ],
        modo_preparo: [
            "Tempere os filés de salmão com sal, pimenta, suco de limão e ervas finas (se usar).",
            "Em uma tigela, misture os aspargos e os tomates cereja com 1 colher de sopa de azeite, sal e pimenta.",
            "Aqueça uma frigideira ou grelha com o restante do azeite.",
            "Grelhe o salmão por cerca de 4-6 minutos de cada lado, ou até ficar cozido por dentro e dourado por fora.",
            "Na mesma frigideira ou em outra, salteie os legumes por 5-7 minutos, até ficarem macios mas ainda crocantes.",
            "Sirva o salmão com os legumes ao lado."
        ],
        fotos_adicionais: [
            { url: "imagens/detalhe_salmao_1.png", titulo: "Salmão sendo grelhado" },
            { url: "imagens/detalhe_salmao_2.png", titulo: "Legumes coloridos" }
        ],
        popular: true
    },
    {
        id: 3,
        nome: "Mousse de Maracujá",
        categoria: "sobremesas",
        imagem_principal: "imagens/card_placeholder_3.png",
        descricao_curta: "Sobremesa leve, refrescante e fácil de fazer, com o sabor azedinho do maracujá.",
        tempo_preparo: "20 minutos + 2h geladeira",
        porcoes: "6 pessoas",
        ingredientes: [
            { nome: "Leite condensado", quantidade: "1 lata" },
            { nome: "Creme de leite", quantidade: "1 lata (sem soro)" },
            { nome: "Suco de maracujá concentrado", quantidade: "a mesma medida da lata de leite condensado" },
            { nome: "Polpa de maracujá com sementes (opcional para decorar)", quantidade: "1/2 xícara" }
        ],
        modo_preparo: [
            "No liquidificador, bata o leite condensado, o creme de leite e o suco de maracujá por cerca de 3-5 minutos, até obter uma mistura homogênea e cremosa.",
            "Despeje o mousse em taças individuais ou em um refratário.",
            "Leve à geladeira por pelo menos 2 horas, ou até firmar.",
            "Se desejar, decore com a polpa de maracujá com sementes antes de servir."
        ],
        fotos_adicionais: [
            { url: "imagens/detalhe_mousse_1.png", titulo: "Textura do Mousse" },
            { url: "imagens/detalhe_mousse_2.png", titulo: "Mousse pronto para servir" }
        ],
        popular: false
    },
    {
        id: 4,
        nome: "Salada Caprese",
        categoria: "entradas",
        imagem_principal: "imagens/card_placeholder_4.png",
        descricao_curta: "Uma salada italiana simples e elegante com tomate, mussarela de búfala e manjericão.",
        tempo_preparo: "10 minutos",
        porcoes: "2-3 pessoas",
        ingredientes: [
            { nome: "Tomates maduros e firmes", quantidade: "3 grandes" },
            { nome: "Mussarela de búfala fresca", quantidade: "200g" },
            { nome: "Folhas de manjericão fresco", quantidade: "1 maço pequeno" },
            { nome: "Azeite extra virgem de boa qualidade", quantidade: "a gosto" },
            { nome: "Redução de aceto balsâmico (opcional)", quantidade: "a gosto" },
            { nome: "Sal e pimenta do reino moída na hora", quantidade: "a gosto" }
        ],
        modo_preparo: [
            "Lave bem os tomates e o manjericão. Seque-os.",
            "Corte os tomates e a mussarela de búfala em fatias de aproximadamente 0,5 cm de espessura.",
            "Em um prato ou travessa, intercale as fatias de tomate, mussarela e folhas de manjericão.",
            "Tempere com sal e pimenta do reino a gosto.",
            "Regue generosamente com azeite extra virgem.",
            "Se desejar, finalize com um fio de redução de aceto balsâmico.",
            "Sirva imediatamente."
        ],
        fotos_adicionais: [
             { url: "imagens/detalhe_caprese_1.png", titulo: "Montagem da Salada" },
             { url: "imagens/detalhe_caprese_2.png", titulo: "Finalização com Azeite" }
        ],
        popular: true
    },
    {
        id: 5,
        nome: "Bolo de Chocolate Fofinho",
        categoria: "sobremesas",
        imagem_principal: "imagens/card_placeholder_5.png",
        descricao_curta: "Um bolo de chocolate clássico, fofinho e delicioso, perfeito para qualquer ocasião.",
        tempo_preparo: "50 minutos",
        porcoes: "10 fatias",
        ingredientes: [
            { nome: "Farinha de trigo", quantidade: "2 xícaras" },
            { nome: "Açúcar", quantidade: "1 e 1/2 xícaras" },
            { nome: "Chocolate em pó (50% cacau)", quantidade: "1 xícara" },
            { nome: "Ovos", quantidade: "3 grandes" },
            { nome: "Leite morno", quantidade: "1 xícara" },
            { nome: "Óleo vegetal", quantidade: "1/2 xícara" },
            { nome: "Fermento em pó", quantidade: "1 colher de sopa" },
            { nome: "Bicarbonato de sódio", quantidade: "1 colher de chá" },
            { nome: "Sal", quantidade: "1 pitada" },
            { nome: "Extrato de baunilha (opcional)", quantidade: "1 colher de chá" }
        ],
        modo_preparo: [
            "Pré-aqueça o forno a 180°C. Unte e enfarinhe uma forma redonda (22-24cm de diâmetro).",
            "Em uma tigela grande, peneire a farinha, o açúcar, o chocolate em pó, o fermento, o bicarbonato e o sal. Misture bem.",
            "Em outra tigela, bata ligeiramente os ovos. Adicione o leite morno, o óleo e a baunilha (se usar). Misture.",
            "Despeje os líquidos sobre os ingredientes secos e misture delicadamente com um fouet ou espátula, apenas até incorporar. Não misture demais.",
            "Despeje a massa na forma preparada e leve ao forno por cerca de 35-40 minutos, ou até que um palito inserido no centro saia limpo.",
            "Retire do forno, espere amornar por uns 10 minutos e desenforme sobre uma grade para esfriar completamente.",
            "Cubra com sua cobertura de chocolate favorita, se desejar."
        ],
        fotos_adicionais: [
             { url: "imagens/detalhe_bolo_1.png", titulo: "Massa do Bolo" },
             { url: "imagens/detalhe_bolo_2.png", titulo: "Bolo Assado" }
        ],
        popular: false
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const paginaAtual = window.location.pathname.split("/").pop();

    if (paginaAtual === 'index.html' || paginaAtual === '') {
        carregarDestaques();
        carregarReceitas();
        configurarFiltrosCategoria();
    } else if (paginaAtual === 'detalhes.html') {
        carregarDetalhesReceita();
    }
});

function carregarDestaques() {
    const carrosselInner = document.getElementById('carrossel-inner');
    const carrosselIndicadores = document.getElementById('carrossel-indicadores');
    if (!carrosselInner || !carrosselIndicadores) return;

    const receitasDestaque = receitas.filter(r => r.popular);
    
    receitasDestaque.forEach((receita, index) => {
        const activeClass = index === 0 ? 'active' : '';
        
        const indicador = `<button type="button" data-bs-target="#carrossel-receitas" data-bs-slide-to="${index}" class="${activeClass}" aria-current="${index === 0 ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></button>`;
        carrosselIndicadores.innerHTML += indicador;

        const itemCarrossel = `
            <div class="carousel-item ${activeClass}">
                <a href="detalhes.html?id=${receita.id}">
                    <img src="${receita.imagem_principal}" class="d-block w-100" alt="${receita.nome}">
                </a>
                <div class="carousel-caption d-none d-md-block">
                    <h5>${receita.nome}</h5>
                    <p>${receita.descricao_curta}</p>
                </div>
            </div>
        `;
        carrosselInner.innerHTML += itemCarrossel;
    });
}


function carregarReceitas(categoriaFiltro = 'todas') {
    const listaReceitas = document.getElementById('lista-receitas');
    if (!listaReceitas) return;

    listaReceitas.innerHTML = ''; // Limpa receitas anteriores
    let receitasFiltradas = receitas;

    if (categoriaFiltro !== 'todas') {
        receitasFiltradas = receitas.filter(r => r.categoria === categoriaFiltro);
    }
    
    if (receitasFiltradas.length === 0) {
        listaReceitas.innerHTML = `<p class="col-12 text-center">Nenhuma receita encontrada para esta categoria.</p>`;
        return;
    }

    receitasFiltradas.forEach(receita => {
        const cardReceita = `
            <div class="col">
                <div class="card h-100">
                    <img src="${receita.imagem_principal}" class="card-img-top" alt="${receita.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${receita.nome}</h5>
                        <p class="card-text">${receita.descricao_curta}</p>
                        <a href="detalhes.html?id=${receita.id}" class="btn btn-primary">Ver Receita</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Tempo: ${receita.tempo_preparo}</small>
                    </div>
                </div>
            </div>
        `;
        listaReceitas.innerHTML += cardReceita;
    });
}

function configurarFiltrosCategoria() {
    const linksCategoria = document.querySelectorAll('.categoria-link');
    const tituloSecaoReceitas = document.getElementById('titulo-secao-receitas');

    linksCategoria.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const categoria = event.target.dataset.categoria;
            
            // Atualiza o título da seção
            if (tituloSecaoReceitas) {
                const nomeCategoria = event.target.textContent;
                tituloSecaoReceitas.textContent = categoria === 'todas' ? "Todas as Receitas" : `Receitas de ${nomeCategoria}`;
            }
            
            // Remove a classe 'active' de todos os links e adiciona ao clicado
            linksCategoria.forEach(l => l.classList.remove('active'));
            event.target.classList.add('active');
            if (event.target.closest('.navbar-nav').querySelector('.nav-link[aria-current="page"]')) {
                 event.target.closest('.navbar-nav').querySelector('.nav-link[aria-current="page"]').classList.remove('active');
            }


            carregarReceitas(categoria);
        });
    });
     // Ativa o filtro "Todas" por padrão
    const linkTodas = document.querySelector('.categoria-link[data-categoria="todas"]');
    if (linkTodas) {
        linkTodas.classList.add('active');
         if (linkTodas.closest('.navbar-nav').querySelector('.nav-link[aria-current="page"]')) {
           linkTodas.closest('.navbar-nav').querySelector('.nav-link[aria-current="page"]').classList.remove('active');
        }
    }
}


function carregarDetalhesReceita() {
    const params = new URLSearchParams(window.location.search);
    const receitaId = parseInt(params.get('id'));
    const container = document.getElementById('detalhes-receita-container');
    const carregandoDetalhes = document.getElementById('carregando-detalhes');

    if (!container || !carregandoDetalhes) return;

    const receita = receitas.find(r => r.id === receitaId);

    if (receita) {
        carregandoDetalhes.style.display = 'none'; // Esconde a mensagem de carregamento

        document.title = `${receita.nome} - Sabor & Arte`; // Atualiza o título da página

        let ingredientesHtml = '<ul class="list-group list-group-flush mb-3">';
        receita.ingredientes.forEach(ing => {
            ingredientesHtml += `<li class="list-group-item">${ing.quantidade} de ${ing.nome}</li>`;
        });
        ingredientesHtml += '</ul>';

        let modoPreparoHtml = '<ol class="list-group list-group-numbered mb-3">';
        receita.modo_preparo.forEach(passo => {
            modoPreparoHtml += `<li class="list-group-item">${passo}</li>`;
        });
        modoPreparoHtml += '</ol>';

        let fotosAdicionaisHtml = '';
        if (receita.fotos_adicionais && receita.fotos_adicionais.length > 0) {
            fotosAdicionaisHtml += '<section id="secao-fotos-adicionais" class="mt-5"><h3 class="mb-3">Mais Imagens</h3><div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">';
            receita.fotos_adicionais.forEach(foto => {
                fotosAdicionaisHtml += `
                    <div class="col">
                        <div class="card">
                            <img src="${foto.url}" class="card-img-top" alt="${foto.titulo}">
                            <div class="card-body text-center">
                                <p class="card-text">${foto.titulo}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            fotosAdicionaisHtml += '</div></section>';
        }
        
        container.innerHTML = `
            <article class="mb-5">
                <h1 class="mb-3">${receita.nome}</h1>
                <div class="row">
                    <div class="col-md-6">
                        <img src="${receita.imagem_principal}" class="img-fluid rounded mb-3" alt="Imagem principal de ${receita.nome}">
                    </div>
                    <div class="col-md-6">
                        <p class="lead">${receita.descricao_curta}</p>
                        <p><strong>Categoria:</strong> ${receita.categoria.replace('_', ' ')}</p>
                        <p><strong>Tempo de Preparo:</strong> ${receita.tempo_preparo}</p>
                        <p><strong>Porções:</strong> ${receita.porcoes}</p>
                    </div>
                </div>
                
                <section id="secao-ingredientes" class="mt-4">
                    <h3 class="mb-3">Ingredientes</h3>
                    ${ingredientesHtml}
                </section>

                <section id="secao-modo-preparo" class="mt-4">
                    <h3 class="mb-3">Modo de Preparo</h3>
                    ${modoPreparoHtml}
                </section>
                
                ${fotosAdicionaisHtml}
            </article>
        `;
    } else {
        carregandoDetalhes.innerHTML = '<p class="text-center text-danger">Receita não encontrada.</p>';
    }
}


