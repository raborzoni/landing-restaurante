import ProductCard from './components/ProductCard';
import styles from './styles/Home.module.css';
import products from './data/products';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'; // Ícones do React Icons

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Sabores que encantam!</h1>
          <p>Nosso restaurante tem os melhores lanches para a sua noite. <br />
            Não fique parado ai, peça online e receba em casa.</p>
          <Link href="https://www.ifood.com.br/inicio" passHref>
            <button className={styles.bannerButton}>Compre aqui</button>
          </Link>
        </div>
      </section>
      <section id="cardapio" className={styles.menu}>
        <h2>Cardápio</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className={styles.contactSection}>
        <h2>Contato</h2>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <FaPhone className={styles.contactIcon} />
            <h3>Telefone</h3>
            <p>(11) 1234-5678</p>
          </div>
          <div className={styles.contactCard}>
            <FaWhatsapp className={styles.contactIcon} />
            <h3>WhatsApp</h3>
            <p>(11) 98765-4321</p>
          </div>
          <div className={styles.contactCard}>
            <FaEnvelope className={styles.contactIcon} />
            <h3>Email</h3>
            <p>contato@restaurante.com</p>
          </div>
        </div>
      </section>

      {/* Seção de Endereço */}
      <section id="endereco" className={styles.addressSection}>
        <h2>Endereço</h2>
        <div className={styles.addressContent}>
          <div className={styles.addressInfo}>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div>
                <h3>Nosso Endereço</h3>
                <p>Rua Exemplo, 123 - Bairro, Cidade - SP</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} />
              <div>
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a Sexta: 18h - 23h</p>
                <p>Sábado e Domingo: 12h - 23h</p>
              </div>
            </div>
          </div>

          {/* <section id="endereco" className={styles.addressSection}>
        <h2>Endereço</h2>
        <div className={styles.addressInfo}>
          <p>Rua Exemplo, 123 - Bairro, Cidade - SP</p>
          <p>Horário de Funcionamento: 18h - 23h</p>
        </div> */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.9378554337684!2d-43.365253902767286!3d-22.885639292168765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99628be8f7e2d5%3A0xf9f37713285f59bb!2sPra%C3%A7a%20Imbituba!5e0!3m2!1spt-BR!2sbr!4v1737857353222!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}