document.addEventListener("DOMContentLoaded", () => {

const $ = (selector) => document.querySelector(selector);

const safeLink = (url, label, className = "button") =>
url ? `<a class="${className}" href="${url}" target="_blank" rel="noopener">${label} ↗</a>` : "";

// Menú móvil
const toggle = $(".menu-toggle");
const nav = $(".nav");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// Redes principales
const socials = [
  ["YT", LINKS.youtube],
  ["SP", LINKS.spotify],
  ["AM", LINKS.appleMusic],
  ["YM", LINKS.youtubeMusic],
  ["FB", LINKS.facebook],
  ["IG", LINKS.instagram]
];

$("#hero-socials").innerHTML = socials
  .filter(([, url]) => url)
  .map(([label, url]) =>
    `<a class="social-orb" href="${url}" target="_blank" rel="noopener">${label}</a>`
  )
  .join("");

$("#featured-links").innerHTML =
  safeLink(LINKS.featured.youtube, "YouTube") +
  safeLink(LINKS.featured.spotify, "Spotify") +
  safeLink(LINKS.featured.apple, "Apple Music");

const latestButton = $('[data-link="latest-youtube"]');
if (latestButton) latestButton.href = LINKS.latest.youtube;

$('[data-link="album-spotify"]').href = LINKS.album.spotify;
$('[data-link="album-apple"]').href = LINKS.album.apple;

// Sencillos
$("#singles-grid").innerHTML = LINKS.singles.map(item => `
<article class="release-card">
  <div class="release-art">
    <img src="${item.image}" alt="${item.title}">
  </div>
  <div class="release-body">
    <h3>${item.title}</h3>
    ${item.subtitle ? `<small>${item.subtitle}</small>` : ""}
    <div class="release-links">
      ${safeLink(item.spotify, "Spotify", "button")}
      ${safeLink(item.apple, "Apple", "button")}
    </div>
  </div>
</article>
`).join("");

// ============================================================
// REDES & STREAMING — logos reales
// Los PNG están en /assets/ y tienen transparencia.
// ============================================================

const logoStyle = document.createElement("style");
logoStyle.textContent = `
  #network-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }

  #network-grid .network-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 210px;
    padding: 24px 18px;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(8,6,7,.72);
    transition: transform .25s ease, border-color .25s ease,
                background .25s ease, box-shadow .25s ease;
  }

  #network-grid .network-card:hover {
    transform: translateY(-5px);
    border-color: rgba(150,25,35,.75);
    background: rgba(20,10,13,.86);
    box-shadow: 0 18px 45px rgba(0,0,0,.35);
  }

  #network-grid .network-logo-wrap {
    width: 78px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #network-grid .network-logo {
    width: 70px;
    height: 70px;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 8px 16px rgba(0,0,0,.45));
    transition: transform .25s ease, filter .25s ease;
  }

  #network-grid .network-card:hover .network-logo {
    transform: scale(1.08);
    filter: drop-shadow(0 10px 20px rgba(120,20,30,.35));
  }

  #network-grid .network-name {
    color: #f1eceb;
    font-size: .95rem;
    letter-spacing: .12em;
    text-transform: uppercase;
  }

  #network-grid .network-subtitle {
    color: rgba(241,236,235,.55);
    font-size: .72rem;
    letter-spacing: .08em;
  }

  #network-grid .network-card[aria-disabled="true"] {
    opacity: .5;
    cursor: default;
  }

  @media (max-width: 820px) {
    #network-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 520px) {
    #network-grid {
      grid-template-columns: 1fr;
    }
  }
`;
document.head.appendChild(logoStyle);

const networks = [
  ["YouTube", "Canal oficial", LINKS.youtube, "assets/youtube.png"],
  ["Spotify", "Artista", LINKS.spotify, "assets/spotify.png"],
  ["Apple Music", "Artista", LINKS.appleMusic, "assets/apple-music.png"],
  ["YouTube Music", "Artista", LINKS.youtubeMusic, "assets/youtube-music.png"],
  ["Facebook", "Página oficial", LINKS.facebook, "assets/facebook.png"],
  ["Instagram", "Próximamente", LINKS.instagram, "assets/instagram.png"]
];

$("#network-grid").innerHTML = networks.map(([name, subtitle, url, icon]) => `
<a class="network-card"
   href="${url || "#"}"
   ${url
     ? 'target="_blank" rel="noopener"'
     : 'aria-disabled="true" onclick="return false;"'}>
  <span class="network-logo-wrap">
    <img class="network-logo" src="${icon}" alt="${name}">
  </span>
  <strong class="network-name">${name}</strong>
  <span class="network-subtitle">${subtitle}</span>
</a>
`).join("");

});
