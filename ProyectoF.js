let estudios=["Prescolar y Primaria-Colegio Esdras ", "Secundaria y Tecnica- Fe y Alegria Maria Inmaculada N3"]
let experiencia=["Pasantias: Empresa PHXSS"]
let habilidades=["Colaboradora","Creativa","Respetuosa", "Html","CSS","Javascript","PowerPoint","Word","Excel", "Basico Profit" ]

for( let estud of estudios){
    $(".es").append(`<li> ${estud} </li>`)
}

for(let habi of habilidades ){
    $(".hab").append(`<li> ${habi} </li>`)
}

for(let expe of experiencia ){
    $(".exp").append(`<li> ${expe} </li>`)
}
