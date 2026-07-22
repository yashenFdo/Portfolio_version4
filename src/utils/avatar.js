const BACKGROUND = '101a30';
const COLOR = '38bdf8';

const IMAGE_PATTERN = /^(https?:\/\/|\/|\.\/|data:image\/)|\.(png|jpe?g|svg|webp|gif|avif)$/i;

function isImagePath(value) {
  return IMAGE_PATTERN.test(value);
}

function logoAvatarUrl(text) {
  const params = new URLSearchParams({
    name: text,
    background: BACKGROUND,
    color: COLOR,
    bold: 'true',
    size: '128',
    format: 'svg',
    length: String(text.length),
  });
  return `https://ui-avatars.com/api/?${params.toString()}`;
}

// Accepts either a short code ('IEEE') -> generates an initials badge,
// or a real image path/URL ('/logos/ieee.png', 'https://...') -> used as-is.
export function resolveLogoSrc(logo) {
  return isImagePath(logo) ? logo : logoAvatarUrl(logo);
}