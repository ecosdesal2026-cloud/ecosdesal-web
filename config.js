/*
  ECOS DE SAL — CONFIGURACIÓN
  Aquí se cambian títulos, textos e IMPORTANTEMENTE los enlaces.
  No necesitas tocar index.html, styles.css ni script.js.

  Pon cada URL real donde aparece "AÑADIR_URL".
*/

const CONFIG = {
  socials: [
    { name: 'YouTube', short: 'YT', url: 'https://www.youtube.com/@EcosdeSal-r6x' },
    { name: 'Spotify', short: 'SP', url: 'AÑADIR_URL' },
    { name: 'Apple Music', short: 'AM', url: 'AÑADIR_URL' },
    { name: 'YouTube Music', short: 'YM', url: 'AÑADIR_URL' },
    { name: 'Instagram', short: 'IG', url: 'https://www.instagram.com/ecosdesalmusic/' },
    { name: 'Facebook', short: 'FB', url: 'AÑADIR_URL' }
  ],

  flagship: {
    title: 'Rosa Marchitada',
    subtitle: 'Nuestro buque insignia.',
    description: 'La canción que abrió una de las puertas más importantes del universo de Ecos de Sal. Una historia de amor, pérdida y memoria que sigue siendo parte esencial de nuestro camino.',
    image: 'assets/rosa-marchitada.svg',
    links: [
      { label: '▶ Ver en YouTube', url: 'https://www.youtube.com/@EcosdeSal-r6x', primary: true },
      { label: 'Spotify', url: 'AÑADIR_URL' },
      { label: 'Apple Music', url: 'AÑADIR_URL' },
      { label: 'YouTube Music', url: 'AÑADIR_URL' }
    ]
  },

  latest: {
    title: 'La última promesa',
    description: 'Dos amantes separados por la muerte. Una promesa que desafía al tiempo, al cielo y a la propia eternidad.',
    image: 'assets/ultimo-estreno.svg',
    links: [
      { label: '▶ Ver el vídeo', url: 'AÑADIR_URL', primary: true },
      { label: 'Spotify', url: 'AÑADIR_URL' },
      { label: 'Apple Music', url: 'AÑADIR_URL' },
      { label: 'YouTube Music', url: 'AÑADIR_URL' }
    ]
  },

  album: {
    title: 'Venas de Obsidiana',
    description: 'El gran universo narrativo de Ecos de Sal.',
    text: 'Una ópera gótica sinfónica de tres actos sobre vampiros, amor eterno, obsesión, fe y redención.',
    image: 'assets/album.svg',
    links: [
      { label: 'Spotify', url: 'AÑADIR_URL' },
      { label: 'Apple Music', url: 'AÑADIR_URL' },
      { label: 'YouTube Music', url: 'AÑADIR_URL' }
    ]
  },

  venas: {
    singles: [
      { title: 'Tus ojos son la noche', url: 'AÑADIR_URL' },
      { title: 'Próximo capítulo', url: 'AÑADIR_URL' },
      { title: 'Próximo capítulo', url: 'AÑADIR_URL' }
    ],
    fullOperaUrl: 'AÑADIR_URL'
  }
};