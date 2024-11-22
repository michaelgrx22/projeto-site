// Seleciona os botões e o conteúdo das abas
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Função para trocar de aba
function switchTab(event) {
    const targetTab = event.target.getAttribute('data-tab'); // Identifica a aba alvo

    // Remove "active" de todos os botões e conteúdos
    tabButtons.forEach(button => button.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Adiciona "active" ao botão clicado e ao conteúdo correspondente
    event.target.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
}

// Adiciona evento de clique aos botões
tabButtons.forEach(button => {
    button.addEventListener('click', switchTab);
});
