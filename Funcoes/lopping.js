function preencherSelection(tag,limite){
    for (let i = 1; i < limite; i++) {
        tag.innerHTML += `<option>${i}</option>`;    
    }    
}

const dia= document.getElementById("dia");
const mes = document.getElementById("mes");
preencherSelection(dia,32);
preencherSelection(mes,13);