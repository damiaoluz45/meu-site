const my_element = document.querySelector("p");

my_element.addEventListener('click', updateName);


function updateName() {
    let nome = prompt("Digite o novo nome: ");
    my_element.textContent = "Nome da pessoa: " + nome;
}



const elem_aoClicar = document.querySelector(".mudar-corFundo-click");
elem_aoClicar.addEventListener('click', mudarAoCLick);

function mudarAoCLick() {
    elem_aoClicar.style.backgroundColor = "#000000";
}



const elem_aoPassarMouse = document.querySelector(".mudar-corFundo-mouse");
elem_aoPassarMouse.addEventListener("mouseover", mudarAoHover);
elem_aoPassarMouse.addEventListener("mouseout", rMudarAoHover);

function mudarAoHover() {
    elem_aoPassarMouse.style.backgroundColor = "#000000";
}
function rMudarAoHover() {
    elem_aoPassarMouse.style.backgroundColor = "#ffffff";
}



var imagensBanner = [
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10234_2_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10236_2_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10232_2_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10237_1_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10239_1_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10240_1_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10242_1_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10243_1_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10244_1_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10248_1_l.jpg",
    "https://www.infomoney.com.br/wp-content/uploads/2019/06/10249_2_l.jpg",



];
var indexImagensBanner = 0;
const tamLista = imagensBanner.length;


const elem_imagem = document.querySelector(".img-trocar");

elem_imagem.addEventListener("click", trocarImagem);

function trocarImagem() {
    elem_imagem.src = imagensBanner[(indexImagensBanner % tamLista)]; 
    ++indexImagensBanner;
}