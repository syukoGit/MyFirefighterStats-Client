import { useContext } from 'react';
import { ThemeContext } from '../utils/contexts/ThemeContext';
import '../styles/Footer.scss';

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <footer>
      <button id="themeButton" onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </button>
    </footer>
  );
}

export default Footer;
