//let dia = document.getElementById("dia")=>explicito que vai pegar um id

//let dia = document.querySelector("#dia")=>nao ta explícito se é id, tag ou class, entao necessita deixar claro qual é, se quise pegar uma option que esta dentro do id basta fazer(#dia option), como no css
let meses= ["Janeiro","Feveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

for(let d = 1; d<32;d++){
    dia.innerHTML += `<option>${d} </option>`
}
for(let m = 0; m<12;m++){
    mes.innerHTML += `<option>${meses[m]} </option>`
}
for(let a = 2025; a>1974;a--){
    ano.innerHTML += `<option>${a}</option>`
}