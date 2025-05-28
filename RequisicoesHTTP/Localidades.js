function Buscarregioes () {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then(res => res.json())
    .then(res2 =>{
        res2.map(regiao=>{//percorre a quntidade de objetos/itens que o array tiver,ex: 5 voltas
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;//regiao vai assumir, a cada volta, uma casa do array
        })
    })
    
}
Buscarregioes( )

function Buscarestados () {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados`)
    .then(res => res.json())
    .then(res2 =>{
        estados.innerHTML=""
        res2.map(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
        })
    })   
}


function Buscarcidades () {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`)
    .then(res => res.json())
    .then(res2 =>{
        //cidades.innerHTML=" "
        res2.map(cidade => {
            cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
        })
    })   
}

