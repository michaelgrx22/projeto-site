var modal = document.getElementById("modal");
var modalTexto = document.getElementById("historia-texto");
var closeButton = document.querySelector(".close");

function mostrarHistoria(nome) {
    var historias = {
        joel: `
            Joel é um homem endurecido pelas circunstâncias. Depois de perder sua filha Sarah no início da epidemia, ele se tornou um sobrevivente implacável, disposto a fazer qualquer coisa para garantir sua sobrevivência. Sua história é marcada por tragédias pessoais, e sua relação com Ellie se torna um dos pilares da narrativa, com Joel se tornando quase uma figura paterna para a jovem.
        `,
        ellie: `
            Ellie é uma adolescente corajosa e resiliente, 
            que, após a morte de seus pais, cresceu em um mundo devastado. Ela tem um papel fundamental na história devido à sua imunidade ao fungo Cordyceps, o que pode ser a chave para a sobrevivência da humanidade. Sua jornada ao lado de Joel a transforma profundamente, enquanto ela aprende sobre confiança, perda e amor.
        `,
        tess: `
            Tess é uma mulher pragmática e forte que atua como parceira de Joel no comércio de suprimentos. Embora seja mais fria e calculista, ela é leal e se preocupa profundamente com Joel, sendo uma das poucas pessoas com quem ele tem uma conexão genuína. Sua relação com Joel é complexa, sendo sua aliada e, ao mesmo tempo, uma motivadora de seu lado mais humano.
        `,
        bill: `
            Bill é um sobrevivente excêntrico e recluso que mora em uma cidade abandonada. Embora seja uma pessoa de poucos amigos, ele tem um profundo senso de lealdade, especialmente para com Joel, com quem compartilha um passado conturbado. Bill é um personagem mais sombrio e solitário, mas sua habilidade com armadilhas e preparações para a sobrevivência o torna um aliado valioso.
        `,
        marlene: `
            Marlene é a líder do grupo de resistência chamado Fireflies, que busca encontrar uma cura para a infecção do Cordyceps. Ela é uma mulher determinada e corajosa, com um grande senso de propósito. Marlene vê Ellie como a chave para salvar a humanidade, o que a leva a uma série de decisões difíceis que afetam a jornada de todos os envolvidos.
        `,
        sam: `
            Sam é um jovem sobrevivente que se junta a Joel e Ellie durante a jornada. Ele é o irmão mais novo de Henry, com quem Joel forma uma relação de confiança. A relação de Sam com Ellie traz uma sensação de esperança e humanidade em um mundo devastado, embora sua história tenha um final trágico.
        `,
        tommy: `
            Tommy é o irmão mais novo de Joel e uma das poucas pessoas que Joel ainda mantém contato após o colapso da civilização. Embora os irmãos tenham se distanciado ao longo dos anos, Tommy é um personagem chave na história de Joel, sendo uma ligação ao seu passado e oferecendo uma perspectiva diferente sobre o mundo pós-apocalíptico.
        `
    };

    document.getElementById('historia-texto').innerText = historias[nome];
    document.getElementById('modal').style.display = "block";
}

function mostrarDescricao(infectado) {
    var infectados = {
        runner: `
            Os Runners são as primeiras formas da infecção. Eles ainda possuem alguns traços humanos, mas seus corpos estão começando a ser dominados pelo fungo Cordyceps. Extremamente agressivos, eles atacam qualquer ser humano que se aproxime. Sua velocidade e ferocidade tornam-nos ameaças implacáveis.
        `,
        stalker: `
            Stalkers são infectados que passaram por uma fase de transição, onde o fungo começou a deformar seus corpos. Eles são mais furtivos, se escondendo nas sombras e atacando os sobreviventes quando a oportunidade surge. Eles são perigosos porque podem facilmente emboscar suas vítimas.
        `,
        clicker: `
            Clickers são uma das formas mais assustadoras de infectados. Suas cabeças foram tomadas por uma estrutura de esporos, o que os torna cegos. Para se orientar, eles emitem um som característico de "click", que é usado para detectar a presença de suas vítimas. Clickers são extremamente mortais, com um único toque podendo ser fatal.
        `,
        bloater: `
            Bloaters são os infectados mais avançados, com o fungo dominando completamente seu corpo. Eles são imunes a quase todas as armas e podem lançar esporos venenosos no ambiente. Bloaters são gigantes e extremamente fortes, capazes de derrubar portas e esmagar qualquer sobrevivente que esteja em seu caminho.
        `
    };

    document.getElementById('historia-texto').innerText = infectados[infectado];
    document.getElementById('modal').style.display = "block";
}

function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        fecharModal();
    }
};

closeButton.onclick = function() {
    fecharModal();
};

let currentIndex = 0;

function changeImage() {
    const images = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + 1) % images.length;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeImage, 3000);

const audio = document.getElementById('bg-music');

const savedTime = localStorage.getItem('audioTime');

if (savedTime) {
    audio.currentTime = savedTime;
    audio.play();
}

audio.addEventListener('timeupdate', function() {
    localStorage.setItem('audioTime', audio.currentTime);
});

audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
});
