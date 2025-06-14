# Projeto E-commerce Simples: Parfume

Bem-vindo ao projeto Parfume! Este é um e-commerce simples, totalmente desenvolvido com tecnologias front-end (HTML, CSS e JavaScript), que simula uma vitrine de perfumes. O projeto permite que os usuários visualizem os produtos e apliquem filtros dinâmicos de categoria e preço.

O diferencial deste projeto é sua simplicidade e foco no aprendizado de manipulação do DOM com JavaScript puro, além de boas práticas de estruturação de HTML e estilização com CSS, incluindo responsividade.

## <img src="./src/imagens/gif-perfume.gif">

## ✨ Funcionalidades
- Listagem de Produtos: Exibe os perfumes em cards, com imagem, nome, categoria e preço.
- Filtro por Categoria: Permite ao usuário selecionar uma categoria e visualizar apenas os perfumes correspondentes.
- Filtro por Preço Máximo: O usuário pode definir um valor máximo e a página exibirá apenas os produtos que custam até aquele preço.
- Filtros Combinados: É possível aplicar os dois filtros (categoria e preço) simultaneamente.
- Botão de Compra via WhatsApp: Cada produto possui um botão "Comprar" que redireciona o usuário para o WhatsApp com uma mensagem pronta, facilitando o contato para a compra.
- Design Responsivo: A interface se adapta a diferentes tamanhos de tela, como desktops, tablets e celulares.

## 🚀 Tecnologias Utilizadas
- HTML5: Para a estrutura semântica do conteúdo.
- CSS3: Para a estilização, layout (com Flexbox) e responsividade (com Media Queries).
- JavaScript (Vanilla JS): Para toda a interatividade e lógica de filtragem dos produtos sem a necessidade de recarregar a página.
- Google Fonts: Para a utilização da fonte "Roboto".

## 📂 Estrutura do Projeto
O projeto está organizado da seguinte forma para facilitar a manutenção:

```
/
├── index.html                # Arquivo principal da página
├── README.md                 # Este arquivo
└── src/
    ├── css/
    │   ├── estilos.css       # Estilos principais
    │   ├── responsivo.css    # Estilos para telas menores
    │   └── reset.css         # Reset de estilos padrão do navegador
    ├── imagens/
    │   ├── logo.png          # Logo da loja
    │   ├── favicon.png       # Ícone da aba do navegador
    │   └── ...               # Imagens dos perfumes
    └── js/
        └── index.js          # Lógica de interatividade e filtros
```

## ⚙️ Como Funciona (Análise do Código)
O projeto é dividido em três partes principais que trabalham juntas: HTML, CSS e JavaScript.

1. HTML (``index.html``)
O HTML é a espinha dorsal do projeto. Ele contém:

- Cabeçalho e Rodapé: Seções semânticas ``<header>`` e ``<footer>``.
- Filtros: Uma seção ``<div class="filtros">`` com um ``<select>`` para categorias e um ``<input>`` para o preço.
- Lista de Produtos: Uma lista não ordenada ``<ul class="perfumes">`` onde cada perfume é um item ``<li>`` com a classe .perfume.
O ponto mais importante no HTML é o uso de atributos ``data-*`` nos itens da lista de produtos:

````
<li class="perfume" data-categoria="Diário/Casual" data-preco="100"></li>
````

- ``data-categoria:`` Armazena a categoria do perfume.
- ``data-preco:`` Armazena o preço do perfume.

Esses atributos são essenciais, pois permitem que o JavaScript "leia" as informações de cada produto diretamente do HTML para aplicar a lógica de filtragem.

O botão de compra utiliza um link direto para a API do WhatsApp (wa.me), já com uma mensagem pré-definida:

````
<a href="http://wa.me/SEUNUMERO?text=Olá, quero comprar o perfume X!" class="btn-comprar" target="_blank">Comprar</a>
````

2. CSS (``estilos.css`` e ``responsivo.css``)

O CSS é responsável por toda a aparência visual do e-commerce.

- ``reset.css:`` Remove estilos que os navegadores aplicam por padrão, garantindo uma aparência mais consistente.

- ``estilos.css:`` Define o layout principal usando Flexbox, estiliza os cards de produto ``(.perfume)``, os campos de filtro, os botões e a tipografia.

- Classes de Controle (``.esconder`` / ``.mostrar``): Existem duas classes simples que são controladas pelo JavaScript para exibir ou ocultar os produtos:

````
.esconder {
    display: none;
}
.mostrar {
    display: block; /* Ou outro display adequado, como 'flex' */
}
````

- ``responsivo.css:`` Utiliza ``@media queries`` para ajustar o layout em telas menores. Por exemplo, em telas de tablet e celular, os filtros são empilhados verticalmente e os cards de produtos são centralizados.

3. JavaScript (``index.js``)

Este é o cérebro do projeto. Ele adiciona a interatividade de filtragem de forma dinâmica. O código segue uma lógica clara:

1. ``iniciarFiltroDePerfumes()``: É a função principal que "amarra" tudo. Ela espera o evento de clique no botão "Aplicar filtros".

2. Captura dos Valores: Quando o botão é clicado, as funções ``pegarCategoriaSelecionada()`` e ``pegarPrecoMaximoSelecionado()`` leem os valores que o usuário escolheu nos campos de filtro.

3. ``aplicarFiltros(categoria, precoMaximo):`` Esta função itera sobre todos os elementos que possuem a classe ``.perfume``. Para cada perfume, ela chama outra função para decidir se ele deve ser exibido ou não.

4. ``verificarSeDeveMostrarPerfume(perfume, categoriaFiltro, precoMaximoFiltro):`` Esta é a função com a lógica principal. Ela:

- Pega a categoria e o preço do perfume a partir dos seus atributos ``data-categoria`` e ``data-preco``.

- Verifica o filtro de categoria: Se um filtro de categoria foi selecionado e ele é diferente da categoria do perfume, a função retorna ``false`` (não mostrar).

- Verifica o filtro de preço: Se um filtro de preço foi definido e o preço do perfume é maior que o máximo permitido, a função retorna ``false`` (não mostrar).

- Se o perfume passar por todas as verificações, a função retorna ``true`` (mostrar).

5. ``mostrarOuEsconderPerfume(perfume, deveMostrar):`` Com base no retorno (``true`` ou ``false``) da função anterior, esta função simplesmente adiciona ou remove as classes ``.mostrar`` e ``.esconder`` do elemento do perfume, fazendo com que ele apareça ou desapareça da tela.

## 🚀 Como Executar Localmente
Como este é um projeto puramente front-end, você não precisa de um servidor. Basta seguir os passos:

1. Clone este repositório ou baixe os arquivos para o seu computador.
2. Navegue até a pasta do projeto.
3. Abra o arquivo ``index.html`` no seu navegador de preferência (Google Chrome, Firefox, etc.).

## 🔮 Possíveis Melhorias
- Adicionar um botão "Limpar Filtros" para remover todas as seleções.
- Criar uma funcionalidade de busca por nome do perfume.
- Adicionar animações sutis na aparição e desaparecimento dos produtos.
- Refatorar o JavaScript para carregar os produtos a partir de um arquivo JSON, simulando uma chamada de API.

## 🤝 Contato

Você pode me encontrar em:

* **LinkedIn:** https://www.linkedin.com/in/cassio-leite/
* **GitHub:** https://github.com/cassio-leite
* **Email:** cassiocarmo77@gmail.com