const $ = id => document.getElementById(id);

function validUrl(url) {
  return url && url !== '#' && url !== 'AÑADIR_URL';
}

function safeUrl(url) {
  return validUrl(url) ? url : '#';
}

function button(item) {
  const a = document.createElement('a');
  a.className = `button ${item.primary ? 'button-primary' : ''}`;
  a.href = safeUrl(item.url);
  a.textContent = item.label;
  if (validUrl(item.url)) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  } else {
    a.classList.add('disabled-link');
    a.addEventListener('click', e => e.preventDefault());
    a.title = 'Enlace pendiente de configurar';
  }
  return a;
}

function setArt(el, image) {
  if (!el) return;
  el.style.backgroundImage = `url("${image}")`;
}

function render() {
  const hs = $('heroSocials');
  const sg = $('socialGrid');
  const fl = $('footerLinks');

  CONFIG.socials.forEach(s => {
    const i = document.createElement('a');
    i.className = 'icon-link';
    i.href = safeUrl(s.url);
    i.textContent = s.short;
    i.title = s.name;
    if (validUrl(s.url)) {
      i.target = '_blank';
      i.rel = 'noopener noreferrer';
    }
    hs.appendChild(i);

    const c = document.createElement('a');
    c.className = 'social-card';
    c.href = safeUrl(s.url);
    c.innerHTML = `<span class="social-mark">${s.short}</span><span><strong>${s.name}</strong><small>${validUrl(s.url) ? 'Visitar perfil oficial' : 'Enlace pendiente'}</small></span>`;
    if (validUrl(s.url)) {
      c.target = '_blank';
      c.rel = 'noopener noreferrer';
    } else {
      c.classList.add('disabled-link');
      c.addEventListener('click', e => e.preventDefault());
    }
    sg.appendChild(c);

    const f = document.createElement('a');
    f.href = safeUrl(s.url);
    f.textContent = s.name;
    if (validUrl(s.url)) {
      f.target = '_blank';
      f.rel = 'noopener noreferrer';
    } else {
      f.classList.add('disabled-link');
      f.addEventListener('click', e => e.preventDefault());
    }
    fl.appendChild(f);
  });

  $('flagshipTitle').textContent = CONFIG.flagship.title;
  $('flagshipTitle2').textContent = CONFIG.flagship.title;
  $('flagshipSubtitle').textContent = CONFIG.flagship.subtitle;
  $('flagshipDescription').textContent = CONFIG.flagship.description;
  setArt($('flagshipImage'), CONFIG.flagship.image);
  CONFIG.flagship.links.forEach(x => $('flagshipButtons').appendChild(button(x)));

  $('latestTitle').textContent = CONFIG.latest.title;
  $('latestDescription').textContent = CONFIG.latest.description;
  setArt($('latestImage'), CONFIG.latest.image);
  CONFIG.latest.links.forEach(x => $('latestButtons').appendChild(button(x)));

  $('albumTitle').textContent = CONFIG.album.title;
  $('albumTitle2').textContent = CONFIG.album.title;
  $('albumDescription').textContent = CONFIG.album.description;
  $('albumText').textContent = CONFIG.album.text;
  setArt($('albumImage'), CONFIG.album.image);
  CONFIG.album.links.forEach(x => $('albumButtons').appendChild(button(x)));

  CONFIG.venas.singles.forEach(s => {
    const a = document.createElement('a');
    a.className = 'mini-single';
    a.href = safeUrl(s.url);
    a.textContent = s.title;
    if (validUrl(s.url)) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    } else {
      a.classList.add('disabled-link');
      a.addEventListener('click', e => e.preventDefault());
    }
    $('obsidianSingles').appendChild(a);
  });

  $('operaButton').href = safeUrl(CONFIG.venas.fullOperaUrl);
  if (!validUrl(CONFIG.venas.fullOperaUrl)) {
    $('operaButton').classList.add('disabled-link');
    $('operaButton').addEventListener('click', e => e.preventDefault());
  }

  $('year').textContent = new Date().getFullYear();
}

const mb = document.querySelector('.menu-button');
const mm = document.querySelector('.mobile-menu');

mb.addEventListener('click', () => {
  const open = mm.classList.toggle('open');
  mb.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.mobile-menu a').forEach(a => {
  a.onclick = () => mm.classList.remove('open');
});

render();