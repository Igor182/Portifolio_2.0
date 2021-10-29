var hamburguer = document.querySelector(".hamburguer");

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);
    
     

function clicar(){
    let paginas = document.getElementById('quanti').value;
    let caixa = document.getElementById('js')
    let prazzo = document.getElementById('prazo').value;
    let result = document.getElementById('valor');

    let calcpagg = (paginas * 500)
    
    let calcpagcaixa = (calcpagg * 1.25)
    let calcpagprazo = ''
    

    

    if (prazzo == 1 && caixa.checked){
        result.innerHTML = `<p>R$ ${calcpagcaixa * 1.60}</p>`
} else if (prazzo == 2 && caixa.checked) {
        result.innerHTML = `<p>R$ ${calcpagcaixa * 1.55}</p>`
} else if (prazzo == 3 && caixa.checked) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.50}</p>`
} else if (prazzo == 4 && caixa.checked) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.45}</p>`
} else if (prazzo == 5 && caixa.checked) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.40}</p>`
} else if (prazzo == 6 && caixa.checked) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.35}</p>`
} else if (prazzo == 7 && caixa.checked) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.30}</p>`
} else if (prazzo == 8 && caixa.checked) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.25}</p>`
} else if (prazzo == 9 && caixa.checked) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.20}</p>`
} else if (prazzo == 10 && caixa.checked) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.15}</p>`
} else if (prazzo == 1){
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.60}</p>`
} else if (prazzo == 2) {
    result.innerHTML = `<p>R$ ${calcpagcaixa * 1.55}</p>`
} else if (prazzo == 3) {
result.innerHTML = `<p>R$ ${calcpagcaixa * 1.50}</p>`
} else if (prazzo == 4) {
result.innerHTML = `<p>R$ ${calcpagcaixa * 1.45}</p>`
} else if (prazzo == 5) {
result.innerHTML = `<p>R$ ${calcpagcaixa * 1.40}</p>`
} else if (prazzo == 6) {
result.innerHTML = `<p>R$ ${calcpagcaixa * 1.35}</p>`
} else if (prazzo == 7) {
result.innerHTML = `<p>R$ ${calcpagcaixa * 1.30}</p>`
} else if (prazzo == 8) {
result.innerHTML = `<p>R$ ${calcpagcaixa * 1.25}</p>`
} else if (prazzo == 9) {
result.innerHTML = `<p>R$ ${calcpagcaixa * 1.20}</p>`
} else if (prazzo == 10) {
result.innerHTML = `<p>R$ ${calcpagcaixa * 1.15}</p>`
} 


    
        
}


