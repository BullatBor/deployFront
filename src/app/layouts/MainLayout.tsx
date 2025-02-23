import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/widgets';
import { Suspense, useEffect, useState } from 'react';
import { ScrollUpBtn } from '@/shared';
import LoadingPage from '@/pages/loadingPage/LoadingPage';

export const MainLayout = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1000) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
      <Footer />
      {scrolled && <ScrollUpBtn />}
    </div>
  );
};
