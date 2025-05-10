const API_URL = "http://localhost:3000/receitas"; // URL base do JSONServer

document.addEventListener('DOMContentLoaded', () => {
    const paginaAtual = window.location.pathname.split("/").pop();

    if (paginaAtual === 'index.html' || paginaAtual === '') {
        carregarDadosIniciais();
        configurarFiltrosCategoria();
    } else if (paginaAtual === 'detalhes.html') {
        carregarDetalhesReceita();
    }
});

async function carregarDadosIniciais() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erro ao carregar receitas");
        
        const receitas = await response.json();
        carregarDestaques(receitas);
        carregarReceitas(receitas);
    } catch (error) {
        console.error("Erro:", error);
        document.getElementById('lista-receitas').innerHTML = `
            <div class="alert alert-danger col-12">Erro ao carregar as receitas. Tente recarregar a página.</div>
        `;
    }
}

async function carregarDestaques(receitas) {
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

async function carregarReceitas(receitas, categoriaFiltro = 'todas') {
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
        link.addEventListener('click', async (event) => {
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

            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error("Erro ao filtrar receitas");
                const receitas = await response.json();
                carregarReceitas(receitas, categoria);
            } catch (error) {
                console.error("Erro:", error);
                document.getElementById('lista-receitas').innerHTML = `
                    <div class="alert alert-danger col-12">Erro ao filtrar as receitas. Tente novamente.</div>
                `;
            }
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

async function carregarDetalhesReceita() {
    const params = new URLSearchParams(window.location.search);
    const receitaId = parseInt(params.get('id'));
    const container = document.getElementById('detalhes-receita-container');
    const carregandoDetalhes = document.getElementById('carregando-detalhes');

    if (!container || !carregandoDetalhes) return;

    try {
        const response = await fetch(`${API_URL}/${receitaId}`);
        if (!response.ok) throw new Error("Receita não encontrada");
        
        const receita = await response.json();
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
    } catch (error) {
        console.error("Erro:", error);
        carregandoDetalhes.innerHTML = '<p class="text-center text-danger">Erro ao carregar a receita. Tente novamente.</p>';
    }
}