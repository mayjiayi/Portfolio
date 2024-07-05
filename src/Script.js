import { useEffect } from 'react';

const Script = () => {
  useEffect(() => {
    const wave1 = document.getElementById('wave1');
    const wave2 = document.getElementById('wave2');
    const wave3 = document.getElementById('wave3');
    const wave4 = document.getElementById('wave4');

    const handleScroll = () => {
      const value = window.scrollY;

      if (wave1) wave1.style.backgroundPositionX = 200 + value * 0.5 + 'px';
      if (wave2) wave2.style.backgroundPositionX = 500 + value * -0.5 + 'px';
      if (wave3) wave3.style.backgroundPositionX = 300 + value * 0.5 + 'px';
      if (wave4) wave4.style.backgroundPositionX = 100 + value * -0.5 + 'px';
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default Script;