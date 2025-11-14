const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const experiencia = document.getElementById("experiencia").value.trim();
    const periodoInicio = document.getElementById("periodoInicio").value;
    const periodoFim = document.getElementById("periodoFim").value;
    const atividade = document.getElementById("atividade").value.trim();
    const habilidades = document.getElementById("habilidades").value.trim();
    const curriculo = document.getElementById("curriculo").files[0];
    
    if (nome === "" || email === "" || telefone === "" || experiencia === "" || habilidades === "" || !curriculo) {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        mensagem.style.fontWeight = "bold";
        mensagem.style.marginTop = "1rem";
    } else {
        mensagem.textContent = "Formulário enviado com sucesso!";
        mensagem.style.color = "green";
        mensagem.style.fontWeight = "bold";
        mensagem.style.marginTop = "1rem";
        
        form.reset();
    }
});
