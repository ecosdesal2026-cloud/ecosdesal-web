(() => {
  const button = document.querySelector('.menu-button');
  const menu = document.querySelector('.mobile-nav');

  if (button && menu) {
    button.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ÚLTIMO ESTRENO — I WAS PAINTED SHUT
  const latest = document.querySelector('#estreno');
  if (latest) {
    const title = 'I Was Painted Shut';
    const description = 'Una historia de encierro, silencio y liberación. Una mujer que dejó de pedir permiso para abrir la ventana.';
    const image = latest.querySelector('.art-wrap img');
    const heading = latest.querySelector('.section-heading h2');
    const cardTitle = latest.querySelector('.copy h3');
    const cardText = latest.querySelector('.copy p');
    const kicker = latest.querySelector('.kicker');
    const buttonLink = latest.querySelector('.button.primary');

    if (heading) heading.textContent = title;
    if (cardTitle) cardTitle.textContent = title;
    if (cardText) cardText.textContent = description;
    if (kicker) kicker.textContent = 'NUEVO ESTRENO · GOTHIC METAL';
    if (image) {
      image.src = 'assets/i-was-painted-shut.jpg';
      image.alt = title;
    }
    if (buttonLink) {
      buttonLink.href = 'https://www.youtube.com/@EcosdeSal-r6x';
      buttonLink.textContent = 'Ver en YouTube ↗';
      buttonLink.setAttribute('aria-label', 'Ver I Was Painted Shut en YouTube');
    }

    // Añadir el estreno a la discografía publicada.
    const grid = document.querySelector('.release-grid');
    if (grid && !grid.querySelector('[data-latest-release]')) {
      const article = document.createElement('article');
      article.className = 'release-card';
      article.setAttribute('data-latest-release', 'true');
      article.innerHTML = `
        <img src="assets/i-was-painted-shut.jpg" alt="${title}" loading="lazy">
        <div>
          <span class="kicker">NUEVO SINGLE</span>
          <h3>${title}</h3>
          <div class="release-buttons">
            <a href="https://www.youtube.com/@EcosdeSal-r6x" target="_blank" rel="noopener">YouTube</a>
          </div>
        </div>`;
      grid.prepend(article);
    }
  }

  // CONTADOR DE VISITAS — CounterAPI, sin registro ni claves.
  const footer = document.querySelector('footer');
  if (footer && !document.querySelector('[data-ecos-visits]')) {
    const visits = document.createElement('div');
    visits.setAttribute('data-ecos-visits', 'true');
    visits.innerHTML = '<span style="opacity:.75">◉</span> <strong>VISITAS</strong> <span data-count>…</span>';
    visits.style.cssText = 'margin:24px auto 8px;padding:10px 18px;border:1px solid rgba(255,255,255,.12);display:inline-flex;gap:9px;align-items:center;color:#aaa2a0;font:9px/1 Inter,Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase;background:rgba(0,0,0,.18);';
    footer.appendChild(visits);

    fetch('https://counterapi.com/api/ecosdesal-web/view/homepage')
      .then(response => response.json())
      .then(data => {
        const count = visits.querySelector('[data-count]');
        if (count && typeof data.value !== 'undefined') {
          count.textContent = Number(data.value).toLocaleString('es-ES');
        }
      })
      .catch(() => {
        const count = visits.querySelector('[data-count]');
        if (count) count.textContent = '—';
      });
  }
})();
