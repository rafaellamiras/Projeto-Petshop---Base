// scripts petshop
document.getElementById("formContato").addEventListener("submit", function (e) {
  //se nào possui a função "onclick" no button, precisa escutar um evento (submit)
  e.preventDefault();

  let nome = document.getElementById("Nome").value.trim();
  let email = document.getElementById("Email").value.trim();
  let mensagem = document.getElementById("Mensagem").value.trim();

  if (!nome == "" || email == "" || !mensagem == "") {
    alert("Preencha todos os campos!");
    return;
  }
  this.reset();
});

// **************************** //

let botaoMenu = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});
