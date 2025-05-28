cep.onkeyup = () => {
    if(cep.value.length == 8){
        console.log("Digitou o cep")
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)//busca informaçoes em outros dominios ou do seu proprio
        .then(resposta => resposta.json())//resposta é tratada para json independente se for psitiva ou nao para poder utilizar no js
        .then(resposta2=> {
            rua.value = resposta2.logradouro;
            bairro.value= resposta2.bairro;
            cidade.value = resposta2.localidade;
            estado.value = resposta2.uf;
        })
    }
}//detecta quando parar de digitar