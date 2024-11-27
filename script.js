const botaoJogar = document.getElementById("jogar");
const resultadoElemento = document.getElementById("resultado");
const imagemResultado = document.getElementById("imagemResultado");
const moedaElemento = document.getElementById("moeda");


function jogar() {
    
    moedaElemento.classList.remove("hide");
    
    
    moedaElemento.classList.add("girando");

    
    setTimeout(() => {
        
        const numeroAleatorio = Math.random();

        
        const resultado = numeroAleatorio < 0.508 ? "Cara" : "Coroa"; 

        
        resultadoElemento.textContent = `Resultado: ${resultado}`; 

        
        if (resultado === "Cara") {
            imagemResultado.src = "imagens/cara.png"; 
        } else {
            imagemResultado.src = "imagens/coroa.png"; 
        }

        
        imagemResultado.style.display = "block";

        
        moedaElemento.classList.remove("girando");

        
        moedaElemento.classList.add("hide");
    }, 1000); 
}


botaoJogar.addEventListener("click", jogar);
