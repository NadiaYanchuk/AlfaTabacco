import styles from "../styles/ProductBlock.module.css";

const ProductBlock = ({ image, title, price }) => {
  return (
    <div className={styles.productBlock}>
      <img src={image} className={styles.productImage} alt="Product" />
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productPrice}>{price}</p>
      <div>
        <button className={styles.productButtonDetails}>Подробнее</button>
        <button className={styles.productBasket}><img className={styles.basket} src="/basket.svg" alt="Basket" /></button>
      </div>
    </div>
  );
};

export default ProductBlock;