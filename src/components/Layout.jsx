import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import BackToTop from './BackToTop';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', overflowX: 'hidden' }}>
      <Nav />
      <div key={location.pathname} className="route-fade">
        <Outlet />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}
