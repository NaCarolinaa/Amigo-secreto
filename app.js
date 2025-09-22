// Lista onde vamos guardar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  // Pega o campo de texto
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  // Verifica se o nome é válido
  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  // Adiciona o nome no array
  amigos.push(nome);

  // Atualiza a lista visível
  atualizarLista();

  // Limpa o campo de texto
  input.value = "";
}

// Função para mostrar a lista de amigos na tela
function atualizarLista() {
  // Pega o elemento da lista
  let lista = document.getElementById("listaAmigos");

  // Limpa a lista antiga
  lista.innerHTML = "";

  // Percorre o array amigos e cria <li> para cada nome
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

// Função para sortear um amigo
function sortearAmigo() {
  // Verifica se a lista está vazia
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  // Gera um índice aleatório
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Pega o nome sorteado
  let sorteado = amigos[indiceAleatorio];

  // Mostra o resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "🎉 O amigo secreto sorteado é: " + sorteado;
}
