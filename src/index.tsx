import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './utils/contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
