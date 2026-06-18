const projetos = [
  {
    nome: "IAbadie",
    repo: "les-ifpe/Iabadie",
    descricao: "Assistente de IA - LES IFPE"
  },
  {
    nome: "Perfil GitHub",
    repo: "Renansoader/Renansoader",
    descricao: "github.com/Renansoader"
  }
  ];

async function checarStatus(repo) {
  try {
    const resposta = await fetch('https://api.github.com/repos/${repo}');
    if (resposta.ok) return "online";
    return "erro";
  } catch {
    return "erro";
  }
}

async function renderizar() {
  const lista = document.getElementById("lista-servicos");
  const atualizacao = document.getElementById("ultima-atualizacao");

lista.innerHTML = "";

for (const projeto of projetos) {
  const status = await checarStatus(projeto.repo);
  const item = document.createElement("li");
item.innerHTML = `${projeto.nome} <span style="color:#888; font-size:0.85rem;">${projeto.descricao}</span> <span class="status-${status}">${status === 'online' ? '● online' : '● erro'}</span>`;  lista.appendChild(item);
}

atualizacao.textContent = "Atualizado em " + new Date().toLocaleString("pt-BR");
}

renderizar();
