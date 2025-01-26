import ProductCard from './components/ProductCard';
import styles from './styles/Home.module.css';
import products from './data/products';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <h1>Sabores que encantam!</h1>
        <p>Peça online e receba em casa.</p>
        <Link href="https://www.ifood.com.br/inicio" passHref>
          <button className={styles.bannerButton}>Compre aqui</button>
        </Link>
      </section>
      <section id="cardapio" className={styles.menu}>
        <h2>Cardápio</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="contato" className={styles.contactSection}>
        <h2>Contato</h2>
        <div className={styles.contactInfo}>
          <p>Telefone: (11) 1234-5678</p>
          <p>WhatsApp: (11) 98765-4321</p>
          <p>Email: contato@restaurante.com</p>
        </div>
      </section>

      <section id="endereco" className={styles.addressSection}>
        <h2>Endereço</h2>
        <div className={styles.addressInfo}>
          <p>Rua Exemplo, 123 - Bairro, Cidade - SP</p>
          <p>Horário de Funcionamento: 18h - 23h</p>
        </div>
        <div className={styles.mapContainer}>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.9378554337684!2d-43.365253902767286!3d-22.885639292168765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99628be8f7e2d5%3A0xf9f37713285f59bb!2sPra%C3%A7a%20Imbituba!5e0!3m2!1spt-BR!2sbr!4v1737857353222!5m2!1spt-BR!2sbr" 
          width="50%" 
          height="400" 
          style={{ border: 0 }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </div>
  );
}