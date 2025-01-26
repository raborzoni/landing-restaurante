import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.address}>
        <h3>Endereço</h3>
        <p>Rua Exemplo, 123 - Bairro, Cidade</p>
        <p>Horário de Funcionamento: 18h - 23h</p>
      </div>
      <div className={styles.contact}>
        <h3>Contato</h3>
        <p>Telefone: (11) 1234-5678</p>
        <p>WhatsApp: (11) 98765-4321</p>
      </div>
      <div className={styles.social}>
        <h3>Redes Sociais</h3>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </footer>
  );
}