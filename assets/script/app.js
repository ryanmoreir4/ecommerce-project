// Função para validar o formulário
function validarFormulario(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Capturar valores dos campos
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  // Validar se os campos estão preenchidos
  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validar se as senhas coincidem
  if (password !== confirmPassword) {
    alert("As senhas não coincidem. Por favor, verifique.");
    return;
  }

  // Redirecionar para main.html após o cadastro ser confirmado
  window.location.href = "main.html";
}

// Adicionar evento de submit ao formulário
document.getElementById("btn").addEventListener("click", validarFormulario);
