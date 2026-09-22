const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
}

/* Formulario -> arma el mensaje y abre WhatsApp con el procedimiento elegido */
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('qfName').value.trim();
    const procedure = document.getElementById('qfProcedure').value;
    const message = document.getElementById('qfMessage').value.trim();

    let text = `Hola, soy ${name}. Me interesa información sobre: ${procedure}.`;
    if (message) text += ` ${message}`;

    const url = `https://wa.me/573127576340?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}
