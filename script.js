function chamarCodec() {
    // 1. Configuração dos sons (Caminhos confirmados na sua pasta CodecSounds)
    const somChamada = new Audio('CodecSounds/codec.mp3');
    const somBip = new Audio('CodecSounds/codec-open.mp3'); // O som de abrir que você pediu
    const somAlerta = new Audio('CodecSounds/over.mp3');
    const display = document.getElementById("mensagem-codec");
    
    const textoFinal = "MEYLING: SNAKE? RESPONDA! SNAKE?! SNAAAAAAAKE!!!";
    
    // Reseta o visor e toca o chamado inicial
    display.innerHTML = "";
    display.style.color = "#4ade80";
    somChamada.play();

    // 2. Espera 2 segundos (tempo do toque) para começar a "conversa"
    setTimeout(() => {
        somAlerta.play();
        let i = 0;

        function digitar() {
            if (i < textoFinal.length) {
                // Toca o bip rápido para cada letra (estilo MGS clássico)
                const bipCurto = somBip.cloneNode(); 
                bipCurto.volume = 0.2; // Volume mais baixo para não estourar no fone
                bipCurto.play();

                display.innerHTML += textoFinal.charAt(i);
                i++;
                setTimeout(digitar, 60); // Velocidade da redigitação
            }
        }
        digitar();
    }, 2000);
}
