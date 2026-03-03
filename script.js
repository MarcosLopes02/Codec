function chamarCodec() {
    const somChamada = new Audio('CodecSounds/codec.mp3');
    const somAlerta = new Audio('CodecSounds/over.mp3');
    const display = document.getElementById("mensagem-codec");
    
    // Texto que será digitado
    const textoFinal = "MEYLING: SNAKE? RESPONDA! SNAKE?! SNAAAAAAAKE!!!";
    
    // Limpa o campo e inicia o som de chamada
    display.innerHTML = "";
    somChamada.play();
    display.style.color = "#4ade80";
    display.style.fontWeight = "bold";

    // Espera o som de chamada (2 segundos) para começar a digitar
    setTimeout(() => {
        somAlerta.play();
        let i = 0;

        function digitar() {
            if (i < textoFinal.length) {
                display.innerHTML += textoFinal.charAt(i);
                i++;
                setTimeout(digitar, 50); // Velocidade da digitação (50ms)
            }
        }
        digitar();
    }, 2000);
}
