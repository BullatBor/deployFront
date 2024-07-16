import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { useEffect, useState } from 'react';
import { ScrollUpBtn } from '@/shared';

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
      <Outlet />
      <Footer />
      {scrolled && <ScrollUpBtn />}
    </div>
  );
};
