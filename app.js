document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    
    if (nome === "admin" && senha === "1234") {
        
        mensagemErro.textContent = "";
        
        
        window.location.href = "https://example.com"; 
    } else {
        mensagemErro.textContent = "Nome ou senha incorretos!";
    }
});