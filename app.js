let amigos = [];

function adicionarAmigo() {
    let amigoSecreto = document.getElementById("amigo").value;

    if (amigoSecreto === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigoSecreto);
        limparCampo();
        atualizarLista();
    }
}



function limparCampo() {
    let amigoSecreto = document.getElementById("amigo");
    amigoSecreto.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria um <li>
        item.textContent = amigos[i]; // Define o texto do <li>
        lista.appendChild(item); // Adiciona o <li> à <ul>
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome sorteado

    document.getElementById("resultado").innerHTML = `🎉 O amigo sorteado foi: <strong>${amigoSorteado}</strong>!`;
}
