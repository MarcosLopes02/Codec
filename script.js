function chamarCodec() {
    // 1. Definição dos sons baseada nos seus arquivos reais
    const somChamada = new Audio('CodecSounds/codec.mp3');
    const somBip = new Audio('CodecSounds/codec-open.mp3'); // O som que fará o efeito de bip
    const somAlerta = new Audio('CodecSounds/over.mp3');
    const display = document.getElementById("mensagem-codec");
    
    const textoFinal = "MEYLING: SNAKE? RESPONDA! SNAKE?! SNAAAAAAAKE!!!";
    
    // Limpa o visor e inicia o toque do Codec
    display.innerHTML = "";
    display.style.color = "#4ade80";
    somChamada.play();

    // 2. Inicia a digitação após o toque (2 segundos)
    setTimeout(() => {
        somAlerta.play();
        let i = 0;

        function digitar() {
            if (i < textoFinal.length) {
                // Toca o bip para cada letra
                // Usamos cloneNode para permitir que o som toque rápido sem travar
                const bipLetra = somBip.cloneNode();
                bipLetra.volume = 0.3; 
                bipLetra.play().catch(() => {}); 

                display.innerHTML += textoFinal.charAt(i);
                i++;
                setTimeout(digitar, 50); // Velocidade da digitação
            }
        }
        digitar();
    }, 2000);
}
