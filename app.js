document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    // Verifica se os dados estão corretos
    if (nome === "admin" && senha === "1234") {
        // Limpa a mensagem de erro, caso exista
        mensagemErro.textContent = "";
        
        // Redireciona o usuário para outro link
        window.location.href = "https://example.com"; 
    } else {
        mensagemErro.textContent = "Nome ou senha incorretos!";
    }
});