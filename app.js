function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}   

// Função responsável por pesquisar e exibir os resultados na página
function Pesquisar() {

    // Obtém a seção HTML onde os resultados serão inseridos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa a variável que armazenará o HTML dos resultados
    let resultados = '';

    let campoPesquisa = document.getElementById("campo-pesquisa").value 
    campoPesquisa = removerAcentos(campoPesquisa.toLowerCase())

    let titulo = "";
    let Descricao = "";
    let tags = ""

     if (campoPesquisa == "") {
        section.innerHTML = "<p>Por favor, insira um valor</p>"
        return
     }

    // Loop para percorrer cada objeto no array 'dados'
    for (let dado of dados) {

        titulo = removerAcentos(dado.titulo.toLowerCase());
        Descricao = removerAcentos(dado.Descricao.toLowerCase());
        tags = removerAcentos(dado.tags.toLowerCase());

         if (titulo.includes(campoPesquisa) || Descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Adiciona o HTML de cada item ao 'resultados', incluindo título e descrição
        resultados += `
<div class="item-resultado">
    <h2><a target="_blank" href=${dado.Link}>${dado.titulo}</a></h2>
        <p class="descricao-meta">
                    ${dado.Descricao}
        </p>
</div>
`;   }
      
    }
    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
     }

    // Insere o HTML gerado dentro da seção de resultados na página
    section.innerHTML = resultados;
}
