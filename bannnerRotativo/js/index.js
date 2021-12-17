let time = 5000
let currentImageIndex = 0
let imagens = document.querySelectorAll("#slider img")
let max = imagens.length

function nextImagem() {
    imagens[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    imagens[currentImageIndex].classList.add("selected")
}

function start(){
    setInterval(() => {
        //troca de imagem
        nextImagem()
    }, time)
}

window.addEventListener("load", start)