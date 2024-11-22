const gameDetails = document.getElementById("game-details");
const body = document.body;

// Dados dos jogos
const games = {
  ac2: {
    title: "Assassin's Creed II",
    year: "2009",
    protagonist: "Ezio Auditore da Firenze",
    setting: "Renascimento italiano",
    highlight: "Expansão de mecânicas e narrativa rica.",
    developer: "Ubisoft Montreal",
    description:
      "Assassin's Creed II leva os jogadores à Itália do Renascimento, onde acompanhamos a jornada de Ezio, um jovem nobre que busca vingança contra a corrupção. Com novas mecânicas e um mundo aberto detalhado, o jogo é um marco na franquia.",
    img: "imagens/ac2s.png", // Substitua pela imagem do jogo
   
  },
  ac3: {
    title: "Assassin's Creed III",
    year: "2012",
    protagonist: "Connor Kenway",
    setting: "Revolução Americana",
    highlight: "Exploração de florestas e batalhas históricas.",
    developer: "Ubisoft Montreal",
    description:
      "Assassin's Creed III coloca os jogadores no meio da Revolução Americana. Controlando Connor, um Assassino meio-indígena, os jogadores exploram vastas paisagens e participam de momentos históricos.",
    img: "imagens/scr3.png", // Substitua pela imagem do jogo

    
  },
  blackflag: {
    title: "Assassin's Creed IV: Black Flag",
    year: "2013",
    protagonist: "Edward Kenway",
    setting: "Caribe no século XVIII",
    highlight: "Exploração naval e batalhas marítimas.",
    developer: "Ubisoft Montreal",
    description:
      "Black Flag mergulha os jogadores na Era de Ouro da Pirataria, permitindo que explorem ilhas tropicais, realizem batalhas navais e descubram segredos escondidos pelo Caribe.",
    img: "imagens/scrbf.png", // Substitua pela imagem do jogo
   
  },
  unity: {
    title: "Assassin's Creed: Unity",
    year: "2014",
    protagonist: "Arno Dorian",
    setting: "Revolução Francesa",
    highlight: "Gráficos avançados e co-op online.",
    developer: "Ubisoft Montreal",
    description:
      "Unity leva os jogadores a Paris durante a Revolução Francesa, com uma narrativa rica, gráficos impressionantes e a introdução de missões cooperativas.",
    img: "imagens/unity2.png", // Substitua pela imagem do jogo
 
   
  },
  origins: {
    title: "Assassin's Creed: Origins",
    year: "2017",
    protagonist: "Bayek de Siuá",
    setting: "Egito Antigo",
    highlight: "Sistema de combate reformulado.",
    developer: "Ubisoft Montreal",
    description:
      "Origins revela as origens da Irmandade dos Assassinos no Egito Antigo, apresentando um mundo vasto e um sistema de combate reformulado.",
    img: "imagens/scrorigins.png", // Substitua pela imagem do jogo

   
  },
  odyssey: {
    title: "Assassin's Creed: Odyssey",
    year: "2018",
    protagonist: "Alexios ou Kassandra",
    setting: "Grécia Antiga",
    highlight: "RPG e escolhas que afetam a história.",
    developer: "Ubisoft Quebec",
    description:
      "Odyssey leva os jogadores à Grécia Antiga, oferecendo liberdade total em um mundo aberto, além de escolhas que afetam o curso da história e a narrativa.",
    img: "imagens/scrodyssey.png", // Substitua pela imagem do jogo
  
    
  }
};

// Função para exibir detalhes do jogo e mudar a imagem de fundo
// Função para exibir detalhes do jogo e mudar a imagem de fundo para um GIF
function displayGameDetails(gameKey) {
    const game = games[gameKey];
    
    // Alterando a imagem de fundo para o GIF comum para todos os jogos
    body.style.backgroundImage = "url('imagens/fundow2.gif')"; // Caminho do seu GIF
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat"; // Garante que o GIF não se repita
  
    // Atualizando os detalhes do jogo
    gameDetails.innerHTML = `
      <h1>${game.title} (${game.year})</h1>
      <img src="${game.img}" alt="${game.title}">
      <p><strong>Protagonista:</strong> ${game.protagonist}</p>
      <p><strong>Ambientação:</strong> ${game.setting}</p>
      <p><strong>Destaque:</strong> ${game.highlight}</p>
      <p><strong>Desenvolvedor:</strong> ${game.developer}</p>
      <p>${game.description}</p>
    `;
  }
  

// Adicionando eventos aos cards do menu
document.querySelectorAll(".game-card").forEach((card) => {
  card.addEventListener("click", () => {
    displayGameDetails(card.id);
    // Rola para os detalhes do jogo
    window.scrollTo({ top: gameDetails.offsetTop, behavior: "smooth" });
  });
});
