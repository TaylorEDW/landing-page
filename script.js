let carrinho = [];

function adicionarAoCarrinho(id, nomeProduto) {
  // Adicionar o produto ao carrinho
  carrinho.push({ id: id, nome: nomeProduto });

  
  // Exibir mensagem de confirmação
  mostrarMensagem("Produto adicionado ao carrinho: " + nomeProduto);


  
  // Atualizar lista de itens no carrinho
  atualizarListaCarrinho();
}

// Função para remover do carrinho
function removerDoCarrinho(id, nomeProduto) {
  // Remover o produto do carrinho
  carrinho = carrinho.filter(produto => produto.id !== id);

  // Exibir mensagem de confirmação
  mostrarMensagem("Produto removido do carrinho: " + nomeProduto);

  // Atualizar lista de itens no carrinho
  atualizarListaCarrinho();
}



function mostrarMensagem(mensagem) {
  alert(mensagem);
}

function atualizarListaCarrinho() {
  let listaCarrinho = document.getElementById('itens-carrinho');
  listaCarrinho.innerHTML = ""; // Limpa a lista
  
  // Adiciona cada produto à lista do carrinho
  carrinho.forEach(produto => {
    let item = document.createElement('li');
    item.textContent = produto.nome;
    listaCarrinho.appendChild(item);

    let removerBtn = document.createElement('button');
    removerBtn.textContent = "Remover do Carrinho";
    removerBtn.classList.add("remover");
    removerBtn.onclick = function() {
      removerDoCarrinho(produto.id, produto.nome);
    };
    item.appendChild(removerBtn);
    
    listaCarrinho.appendChild(item);
  
  });
  
  // Exibir o carrinho
  document.getElementById('carrinho').style.display = 'block';
}

function finalizarCompra() {
  // Montar mensagem com os produtos adicionados ao carrinho
  let mensagemCompra = "Olá! Estou interessado nos seguintes produtos:\n";
  carrinho.forEach((produto, index) => {
    mensagemCompra += (index + 1) + ". " + produto.nome + "\n";
  });
  mensagemCompra += "\nPor favor, me envie mais informações e os preços. Obrigado!";
  
  // Redirecionar para o contato via WhatsApp ou Instagram
  // Exibir opções de contato com WhatsApp e Instagram
  let resposta = prompt("Para finalizar a compra, escolha uma opção de contato:\n\n1. WhatsApp\n2. Instagram");
  
  if (resposta === "1") {
    let numeroWhatsapp = "558695806452"; // Substitua pelo número do WhatsApp da sua loja
    window.open("https://api.whatsapp.com/send?phone=" + numeroWhatsapp + "&text=" + encodeURIComponent(mensagemCompra));
  } else if (resposta === "2") {
    let contaInstagram = "noleto_suplementos"; // Substitua pelo nome da sua conta do Instagram
    window.open("https://ig.me/m/" + contaInstagram + "/?message=" + encodeURIComponent(mensagemCompra) );
  } else {
    alert("Opção inválida. Por favor, escolha entre WhatsApp (1) ou Instagram (2).");
  }
}


// Rolar para tópicos do menu 
document.addEventListener("DOMContentLoaded", function() {
  let links = document.querySelectorAll("nav a");
  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Evita o comportamento padrão do link
      let targetId = this.getAttribute("href"); // Obtém o ID do alvo do link
      let targetElement = document.querySelector(targetId); // Obtém o elemento alvo
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Rola até o elemento alvo
      }
    });
  });
});
