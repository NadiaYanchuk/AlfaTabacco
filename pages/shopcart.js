import Heading from "../components/Heading";
import styles from "../styles/Shopcart.module.css";

const Shopcart = () => {
  return (
    <div className={styles.wrapper}>
      <Heading pageTitle="Корзина" />
      {/* остальной контент страницы */}
    </div>
  );
};

export default Shopcart;
