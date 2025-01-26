import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Home.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}