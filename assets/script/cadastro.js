$(document).ready(function () {
  console.log("Documento pronto");

  function lerUsuarios() {
    let usuarios = [];
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/usuarios",
      dataType: "json",
      async: false,
      success: function (data) {
        usuarios = data;
      },
      error: function (xhr, status, error) {
        console.error("Erro ao ler usuários:", error);
      },
    });
    return usuarios;
  }

  function adicionarUsuario(novoUsuario) {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/usuarios",
      data: JSON.stringify(novoUsuario),
      contentType: "application/json",
      success: function (response) {
        console.log("Usuário adicionado:", response);
        alert("Formulário enviado e processado com sucesso!");
        console.log("Redirecionando para a página principal...");
        window.location.href = "public/main.html";
      },
      error: function (xhr, status, error) {
        console.error("Erro ao adicionar usuário:", error);
        alert("Ocorreu um erro ao enviar o formulário: " + error);
      },
    });
  }

  function usuarioExiste(email) {
    const usuarios = lerUsuarios();
    return usuarios.some((usuario) => usuario.email === email);
  }

  $("#registration-form").submit(function (event) {
    event.preventDefault();
    console.log("Formulário enviado");

    let isValid = true;
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let confirmPassword = $("#confirm-password").val();

    $(".error").remove();

    if (password !== confirmPassword) {
      $("#confirm-password").after(
        '<span class="error">As senhas não coincidem.</span>'
      );
      isValid = false;
    }

    if (usuarioExiste(email)) {
      $("#email").after('<span class="error">Email já está em uso.</span>');
      isValid = false;
    }

    if (isValid) {
      const novoUsuario = {
        name,
        email,
        password,
      };
      console.log("Adicionando usuário:", novoUsuario);
      adicionarUsuario(novoUsuario);
    }
  });
});
