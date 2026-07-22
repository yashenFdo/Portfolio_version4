export const NAV_OFFSET = 88;

export function scrollToSection(navigate, pathname, id) {
  const go = () => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };
  if (pathname !== '/') {
    navigate('/');
    setTimeout(go, 80);
  } else {
    setTimeout(go, 20);
  }
}

export function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
