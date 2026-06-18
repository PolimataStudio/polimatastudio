export function initForms() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    // Não prevenir o envio padrão para que o Formspree receba os dados
    // Mas podemos validar antes de enviar
    const name = form.querySelector('#name')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const message = form.querySelector('#message')?.value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // Impede o envio se campos estiverem vazios
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Se passou na validação, o formulário será enviado normalmente
    // O Formspree cuidará do envio do e-mail
    // Podemos opcionalmente exibir uma mensagem de carregamento
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // O envio será feito pelo navegador para o action do form
    // O Formspree redireciona para uma página de agradecimento padrão
    // Para evitar o redirecionamento, podemos usar fetch, mas isso exige mais código.
    // Como a abordagem é low-code, manteremos o envio tradicional.
  });
}