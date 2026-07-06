//cria uma constante que seleciona o botao no html
const botao = document.querySelector("button");
botao.addEventListener("click", botaoClicado);
//cria um 
function botaoClicado() {
    let texto = botao.querySelector("span");
    texto.textContent++;
}
