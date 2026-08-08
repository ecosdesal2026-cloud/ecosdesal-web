document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);

  const safeLink = (url, label, className = "button") =>
    url ? `<a class="${className}" href="${url}" target="_blank" rel="noopener">${label} ↗</a>` : "";

  const toggle = $(".menu-toggle");
  const nav = $(".nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav a").forEach(a =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );

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
    .map(([label, url]) => `<a class="social-orb" href="${url}" target="_blank" rel="noopener">${label}</a>`)
    .join("");

  $("#featured-links").innerHTML =
    safeLink(LINKS.featured.youtube, "YouTube") +
    safeLink(LINKS.featured.spotify, "Spotify") +
    safeLink(LINKS.featured.apple, "Apple Music");

  const latestButton = $('[data-link="latest-youtube"]');
  if (latestButton) latestButton.href = LINKS.latest.youtube;

  $('[data-link="album-spotify"]').href = LINKS.album.spotify;
  $('[data-link="album-apple"]').href = LINKS.album.apple;

  $("#singles-grid").innerHTML = LINKS.singles.map(item => `
    <article class="release-card">
      <div class="release-art"><img src="${item.image}" alt="${item.title}"></div>
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

  const networks = [
    ["YouTube", "Canal oficial", LINKS.youtube, "assets/youtube.png", "youtube"],
    ["Spotify", "Artista", LINKS.spotify, "assets/spotify.png", "spotify"],
    ["Apple Music", "Artista", LINKS.appleMusic, "assets/apple-music.png", "apple"],
    ["YouTube Music", "Artista", LINKS.youtubeMusic, "assets/youtube-music.png", "youtube-music"],
    ["Facebook", "Página oficial", LINKS.facebook, "assets/facebook.png", "facebook"],
    ["Instagram", "Próximamente", LINKS.instagram, "assets/instagram.png", "instagram"]
  ];

  $("#network-grid").innerHTML = networks.map(([name, subtitle, url, icon, key]) => `
    <a class="network-card network-${key}" href="${url || "#"}"
       ${url ? 'target="_blank" rel="noopener"' : 'aria-disabled="true" onclick="return false;"'}>
      <span class="network-icon-wrap">
        <img class="network-icon" src="${icon}" alt="" aria-hidden="true">
      </span>
      <strong>${name}</strong>
      <span class="network-subtitle">${subtitle}</span>
    </a>
  `).join("");
});
