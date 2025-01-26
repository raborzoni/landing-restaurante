import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={`/images/${product.image}`} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>{product.price}</p>
      <button className={styles.orderButton}>Pedir Agora</button>
    </div>
  );
}