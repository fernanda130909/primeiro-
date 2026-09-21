document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    
    if (nome === "admin" && senha === "1234") {
        
        mensagemErro.textContent = "erro";
        
        
        window.location.href = "windows-6210803_1920.webp"; 
    } else {
        mensagemErro.textContent = "Nome ou senha incorretos!";
    }
});