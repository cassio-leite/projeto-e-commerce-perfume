// Função principal: inicia o filtro quando o botão for clicado
function iniciarFiltroDePerfumes() {
    const botaoFiltrar = document.querySelector(".btn-filtrar");

    botaoFiltrar.addEventListener("click", function () {
        const categoriaSelecionada = pegarCategoriaSelecionada();
        const precoMaximoSelecionado = pegarPrecoMaximoSelecionado();

        aplicarFiltros(categoriaSelecionada, precoMaximoSelecionado);
    });
}

// Função que aplica os filtros em todas as cartas de perfume
function aplicarFiltros(categoria, precoMaximo) {
    const perfumes = document.querySelectorAll(".perfume");

    perfumes.forEach(function (perfume) {
        const deveMostrar = verificarSeDeveMostrarPerfume(perfume, categoria, precoMaximo);
        mostrarOuEsconderPerfume(perfume, deveMostrar);
    });
}

// Função que pega o valor da categoria escolhida no filtro
function pegarCategoriaSelecionada() {
    const campoCategoria = document.querySelector("#categoria");
    return campoCategoria.value;
}

// Função que pega o valor do preço máximo escolhido no filtro
function pegarPrecoMaximoSelecionado() {
    const campoPreco = document.querySelector("#preco");
    return campoPreco.value;
}

// Função que verifica se o perfume deve ser mostrado ou não
function verificarSeDeveMostrarPerfume(perfume, categoriaFiltro, precoMaximoFiltro) {
    const categoriaPerfume = perfume.dataset.categoria;
    const precoPerfume = perfume.dataset.preco;

    // Verifica se tem filtro de categoria e se o perfume bate com ele
    const temFiltroCategoria = categoriaFiltro !== "";
    const categoriaDiferente = categoriaFiltro.toLowerCase() !== categoriaPerfume.toLowerCase();
    if (temFiltroCategoria && categoriaDiferente) {
        return false;
    }

    // Verifica se tem filtro de preço e se o perfume bate com ele
    const temFiltroPreco = precoMaximoFiltro !== "";
    const precoEhMaior = parseFloat(precoPerfume) > parseFloat(precoMaximoFiltro);
    if (temFiltroPreco && precoEhMaior) {
        return false;
    }

    return true; // Se passou pelos dois filtros, pode mostrar
}

// Função que mostra ou esconde o perfume na tela
function mostrarOuEsconderPerfume(perfume, deveMostrar) {
    if (deveMostrar) {
        perfume.classList.add("mostrar");
        perfume.classList.remove("esconder");
    } else {
        perfume.classList.remove("mostrar");
        perfume.classList.add("esconder");
    }
}

// Iniciar a funcionalidade
iniciarFiltroDePerfumes();
