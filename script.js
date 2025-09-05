// ===============================
// Calculadora de economia
// ===============================
function calcularEconomia() {
  const conta = document.getElementById("bill").value;
  if (!conta || conta <= 0) {
    document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
    return;
  }
  const economia = conta * 0.95;
  document.getElementById("resultado").innerText =
    `Com energia solar você pode economizar cerca de R$ ${economia.toFixed(2)} por mês!`;
}

// ===============================
// Animação ao rolar
// ===============================
const elements = document.querySelectorAll('.service, .card, .faq details');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===============================
// Formulário de Leads
// ===============================
document.getElementById("leadForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const form = e.target;
  const data = {
    nome: form.nome.value,
    telefone: form.telefone.value,
    email: form.email.value
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwVRKuVkknh-dRlH6UeTn73d4ZE8WWLNoKS0u_o7gvX4SnDDnbUQgs8AD_MsqrDdH-q/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    });

    // Mostra modal de sucesso
    abrirModal("✅ Obrigado! Seus dados foram enviados com sucesso.");
    form.reset();

  } catch (erro) {
    // Mostra modal de erro
    abrirModal("❌ Ocorreu um erro. Tente novamente.");
  }
});

// ===============================
// Funções do Modal
// ===============================
function abrirModal(mensagem) {
  const modal = document.getElementById("modal-retorno");
  const msg = document.getElementById("modal-msg");
  msg.textContent = mensagem;
  modal.style.display = "block";
}

// Fecha ao clicar no X
document.getElementById("fechar-modal").onclick = function() {
  document.getElementById("modal-retorno").style.display = "none";
}

// Fecha ao clicar fora do modal
window.onclick = function(event) {
  const modal = document.getElementById("modal-retorno");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

