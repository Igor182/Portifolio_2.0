var hamburguer = document.querySelector(".hamburguer");

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);
    

function clicar(){
    let paginas = document.getElementById('quanti').value;
    let caixa = document.getElementById('js')
    let prazzo = document.getElementById('prazo').value;
    let result = document.getElementById('valor');

    let calcpagg = (paginas * 350)
    
    let calcpagcaixa = (calcpagg * 1.25)
    

    

            if (prazzo == 1 && caixa.checked){
                result.innerHTML = `<p>R$ ${calcpagcaixa * 1.60}, prazo de 5 Dias</p>`
        } else if (prazzo == 2 && caixa.checked) {
                result.innerHTML = `<p>R$ ${calcpagcaixa * 1.55}, prazo de 7 Dias</p>`
        } else if (prazzo == 3 && caixa.checked) {
            result.innerHTML = `<p>R$ ${calcpagcaixa * 1.50}, prazo de 9 Dias</p>`
        } else if (prazzo == 4 && caixa.checked) {
            result.innerHTML = `<p>R$ ${calcpagcaixa * 1.45}, prazo de 12 Dias</p>`
        } else if (prazzo == 5 && caixa.checked) {
            result.innerHTML = `<p>R$ ${calcpagcaixa * 1.40}, prazo de 15 Dias</p>`
        } else if (prazzo == 6 && caixa.checked) {
            result.innerHTML = `<p>R$ ${calcpagcaixa * 1.35}, prazo de 18 Dias</p>`
        } else if (prazzo == 7 && caixa.checked) {
            result.innerHTML = `<p>R$ ${calcpagcaixa * 1.30}, prazo de 21 Dias</p>`
        } else if (prazzo == 8 && caixa.checked) {
            result.innerHTML = `<p>R$ ${calcpagcaixa * 1.25}, prazo de 24 Dias</p>`
        } else if (prazzo == 9 && caixa.checked) {
            result.innerHTML = `<p>R$ ${calcpagcaixa * 1.20}, prazo de 27 Dias</p>`
        } else if (prazzo == 10 && caixa.checked) {
            result.innerHTML = `<p>R$ ${calcpagcaixa * 1.15}, prazo de 30 Dias ou Mais</p>`
        } else if (prazzo == 1){
            result.innerHTML = `<p>R$ ${calcpagg * 1.60}, prazo de 5 Dias</p>`
        } else if (prazzo == 2) {
            result.innerHTML = `<p>R$ ${calcpagg * 1.55}, prazo de 7 Dias</p>`
        } else if (prazzo == 3) {
        result.innerHTML = `<p>R$ ${calcpagg * 1.50}, prazo de 9 Dias</p>`
        } else if (prazzo == 4) {
        result.innerHTML = `<p>R$ ${calcpagg * 1.45}, prazo de 12 Dias</p>`
        } else if (prazzo == 5) {
        result.innerHTML = `<p>R$ ${calcpagg * 1.40}, prazo de 15 Dias</p>`
        } else if (prazzo == 6) {
        result.innerHTML = `<p>R$ ${calcpagg * 1.35}, prazo de 18 Dias</p>`
        } else if (prazzo == 7) {
        result.innerHTML = `<p>R$ ${calcpagg * 1.30}, prazo de 21 Dias</p>`
        } else if (prazzo == 8) {
        result.innerHTML = `<p>R$ ${calcpagg * 1.25}, prazo de 24 Dias</p>`
        } else if (prazzo == 9) {
        result.innerHTML = `<p>R$ ${calcpagg * 1.20}, prazo de 27 Dias</p>`
        } else if (prazzo == 10) {
        result.innerHTML = `<p>R$ ${calcpagg * 1.15}, prazo de 30 Dias ou Mais</p>`
        } 
          
        }


