document.addEventListener("DOMContentLoaded", () => {
    const gow2018Btn = document.getElementById("gow2018");
    const gowRagnarokBtn = document.getElementById("gowRagnarok");
    const gameTitle = document.getElementById("titulo-jogo");
    const gameDescription = document.getElementById("descricao-jogo");
    const customCursor = document.getElementById("cursor-personalizado");
    const containerPersonagens = document.getElementById("container-personagens");
    const gifQuadrado = document.getElementById("gif-quadrado"); 

    const personagensGoW2018 = `
        <div class="personagem">
            <img src="kratos.png" alt="Kratos">
            <div class="descricao-personagem">Kratos é o protagonista de God of War 2018, um ex-deus espartano em busca de redenção. Um passado marcado por violência, ele tenta ser um bom pai para seu filho Atreus, controlando seus impulsos e lidando com os desafios do mundo nórdico enquanto enfrenta deuses e monstros.</div>
        </div>
        <div class="personagem">
            <img src="atreus.png" alt="Atreus">
            <div class="descricao-personagem">Atreus é o filho de Kratos, um garoto que aprende sobre seu próprio poder enquanto enfrenta perigos ao lado de seu pai. Embora inicialmente ingênuo, ele cresce durante a jornada e começa a compreender seu destino e a complexidade do mundo dos deuses.</div>
        </div>
        <div class="personagem">
            <img src="baldur.png" alt="Baldur">
            <div class="descricao-personagem">Baldur é o filho de Odin e Freya, um deus imortal que busca vingança contra Kratos e Atreus. Sua imortalidade, uma maldição, impede que ele sinta dor ou prazer, tornando-o amargo e obcecado em acabar com sua condição. Sua relação com sua mãe, Freya, é fundamental para sua história.</div>
        </div>
        <div class="personagem">
            <img src="freya.png" alt="Freya">
            <div class="descricao-personagem">Freya é uma poderosa deusa nórdica e mãe de Baldur. Inicialmente aliada de Kratos e Atreus, ela possui grande sabedoria e habilidades mágicas, mas sua história é marcada por tragédias, especialmente a maldição que afeta seu filho. Sua lealdade e amor materno são centrais para sua jornada.</div>
        </div>
    `;

    const personagensGoWRagnarok = `
        <div class="personagem">
            <img src="thor.png" alt="Thor">
            <div class="descricao-personagem">O deus do trovão da mitologia nórdica, Thor é um dos filhos de Odin e é conhecido por sua imensa força e coragem. No contexto de God of War Ragnarök, Thor é retratado como um guerreiro impiedoso, impetuoso e de temperamento explosivo, carregando o poderoso martelo Mjolnir. Apesar de sua aparência brutal, ele lida com um legado de dor e conflito familiar, especialmente em relação ao seu pai, Odin.</div>
        </div>
        <div class="personagem">
            <img src="odin.png" alt="Odin">
            <div class="descricao-personagem">O pai de todos, Odin é o governante dos deuses nórdicos e o líder dos Aesir. Conhecido por sua sabedoria imensa e por sua busca incansável por poder e controle, Odin sacrifica tudo em nome de garantir o futuro de seu reinado. Em God of War Ragnarök, ele é uma figura manipuladora e de grande influência, cujas ações e planos afetam diretamente o destino dos protagonistas.</div>
        </div>
        <div class="personagem">
            <img src="heimdall.png" alt="Heimdall">
            <div class="descricao-personagem">O vigia dos deuses, Heimdall é um deus com habilidades extraordinárias, incluindo uma visão e audição sobre-humanas. Ele é o guardião da ponte Bifrost, que conecta os reinos, e seu dever é proteger os deuses contra invasores. Em Ragnarök, ele é uma figura arrogante e prepotente, mas com um senso de dever inabalável, disposto a fazer o que for necessário para manter a ordem e o equilíbrio.</div>
        </div>
        <div class="personagem">
            <img src="tyr.png" alt="Tyr">
            <div class="descricao-personagem">O deus da guerra, Tyr é conhecido por sua bravura e seu sacrifício em nome da justiça. Em God of War Ragnarök, ele é retratado como um aliado importante de Kratos e Atreus, após ter sido afastado por Odin. Tyr carrega o peso de um passado de sacrifícios e perdas, incluindo a perda de sua mão ao tentar prender o lobo Fenrir. Sua lealdade e coragem fazem dele uma figura crucial na luta contra o fim do mundo.</div>
        </div>
    `;

    const jogos = {
        gow2018: {
            title: "God of War 2018",
            description: "Em God of War 2018, Kratos, um ex-deus grego, vive em um novo mundo, os reinos nórdicos, com seu filho Atreus. Juntos, eles embarcam em uma jornada para espalhar as cinzas da esposa de Kratos, Faye, no pico mais alto dos nove reinos. Ao longo da viagem, enfrentam deuses, monstros e criaturas mitológicas, enquanto Kratos tenta controlar sua natureza violenta e ensinar seu filho a lidar com seu destino. O jogo explora a relação pai e filho e apresenta uma narrativa profunda sobre redenção e a luta contra o passado de Kratos.",
            backgroundClass: "gow2018",
            personagens: personagensGoW2018 
        },
        gowRagnarok: {
            title: "God of War Ragnarök",
            description: "God of War Ragnarök continua a história de Kratos e Atreus, agora enfrentando o iminente apocalipse nórdico, o Ragnarök. Atreus, agora mais maduro, busca respostas sobre sua identidade e o papel que desempenha no fim dos tempos, enquanto Kratos lida com as consequências de suas ações anteriores. Eles se encontram com aliados e inimigos poderosos, incluindo deuses e criaturas mitológicas, enquanto tentam evitar a destruição de todos os reinos. O jogo explora temas de legado, destino e sacrifício, aprofundando o conflito interno de Kratos enquanto ele tenta proteger seu filho e o futuro dos reinos.",
            backgroundClass: "gowRagnarok",
            personagens: personagensGoWRagnarok 
        }
    };

    gow2018Btn.addEventListener("click", () => updatePage("gow2018"));
    gowRagnarokBtn.addEventListener("click", () => updatePage("gowRagnarok"));

    function updatePage(gameKey) {
        const jogo = jogos[gameKey];
        gameTitle.textContent = jogo.title;
        gameDescription.textContent = jogo.description;
    
        document.body.classList.remove('inicial', 'gow2018', 'gowRagnarok'); 
    
        document.body.classList.add(jogo.backgroundClass);
    
        containerPersonagens.innerHTML = jogo.personagens;
        containerPersonagens.style.display = "flex";
    
        gifQuadrado.classList.add("hidden");
    }
    

    document.addEventListener("mousemove", (e) => {
        customCursor.style.left = `${e.pageX}px`;
        customCursor.style.top = `${e.pageY}px`;
    });

    document.body.classList.add('inicial');

    document.addEventListener("DOMContentLoaded", () => {
        gifQuadrado.classList.remove("hidden");
    });

    document.getElementById("voltarBtn").addEventListener("click", () => {
        window.location.href = "index.html";
    });
    
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
    

});
