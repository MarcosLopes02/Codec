function chamarCodec() {
    const somChamada = new Audio('CodecSounds/codec.mp3');
    const somBip = new Audio('CodecSounds/codec-open.mp3');
    const somAlerta = new Audio('CodecSounds/over.mp3');
    const display = document.getElementById("mensagem-codec");
    
    const textoFinal = "MEYLING: SNAKE? RESPONDA! SNAKE?! SNAAAAAAAKE!!!";
    
    // Reseta o visor e inicia o toque do Codec
    display.innerHTML = "";
    display.style.color = "#4ade80";
    display.style.fontWeight = "bold";
    somChamada.play();

    // 2. Inicia a digitação após o toque inicial (2.5 segundos)
    setTimeout(() => {
        somAlerta.play();
        let i = 0;

        function digitar() {
            if (i < textoFinal.length) {
                // Toca um bip curto para cada letra
                // Usamos volume baixo (0.1) para não ficar irritante
                const bip = somBip.cloneNode();
                bip.volume = 0.1;
                bip.play().catch(() => {}); 

                display.innerHTML += textoFinal.charAt(i);
                i++;
                setTimeout(digitar, 50); // Velocidade da digitação
            }
        }
        digitar();
    }, 2500); 
}
