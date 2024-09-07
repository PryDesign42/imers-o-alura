function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document. getElementById 
    ("campo-pesquisa").value;

    //se o campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
        section.innerHTML ="<p> nada foi encontrado,você precisa digitar uma técnica ou o que ela faz </p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
     let resultados = "";
     let titulos = "";
     let descricao = "";
     let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
         
        // se o titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)
        ) {
             // Constrói o HTML para cada item do resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;

        } 
        
    }

    if(!resultados){
        resultados = "<p> nada foi encontrado </p>"
    }

    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
}

//console.log(dados[2].descricao);
