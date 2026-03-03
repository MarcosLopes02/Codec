function chamarCodec() {
    // 1. Caminhos dos sons
    const somChamada = new Audio('CodecSounds/codec.mp3');
    const somAlerta = new Audio('CodecSounds/over.mp3');

    const displayMensagem = document.getElementById("mensagem-codec");

    // 2. Inicia o som de chamada e atualiza o texto
    somChamada.play();
    displayMensagem.innerHTML = "CONECTANDO AO CANAL 140.15...";
    displayMensagem.style.color = "#4ade80"; // Garante que o texto fique verde

    // 3. Após 2 segundos, muda a mensagem e toca o som de "Game Over"
    setTimeout(() => {
        somAlerta.play();
        // Aqui você muda a frase para o que quiser!
        displayMensagem.innerHTML = "MEYLING: SNAKE? RESPONDA! SNAKE?! SNAAAAAAAKE!!!";
        displayMensagem.style.fontWeight = "bold";
    }, 2500);
}   
