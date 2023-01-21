import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProductBlock from "../components/ProductBlock";
const products = [
  {
    id: 1,
    image: "/product.png",
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet",
    price: "$10",
  },
  {
    id: 2,
    image: "/product.png",
    name: "Product 2",
    description: "Lorem ipsum dolor sit amet",
    price: "$20",
  },
  {
    id: 3,
    image: "/product.png",
    name: "Product 3",
    description: "Lorem ipsum dolor sit amet",
    price: "$30",
  },
];

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>

    {/* Главный экран */}
    <div className={styles.container}>
      <img className={styles.bgImage} src="/main.png" alt="Background" />
      <div className={styles.content}>
        <h1 className={styles.title}>ALPHA TABACCO</h1>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className={styles.button}>Ассортимент</button>
      </div>
    </div>
    {/* Бренды */}
    <div className={styles.block2}>
      <h4 className={styles.blockTitle}>С кем мы работаем?</h4>
      <div className={styles.brandImages}>
        <img src="/brand.svg" alt="Brand 1" />
        <img src="/brand.svg" alt="Brand 2" />
        <img src="/brand.svg" alt="Brand 3" />
      </div>
    </div>
    {/* О нас */}
    <div className={styles.block3}>
      <img src="/about.png" alt="About Us" />
      <div className={styles.block}>
        <h4 className={styles.blockTitle}>История</h4>
        <h2 className={styles.blockMainTitle}>О НАС</h2>
        <p className={styles.block3Text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <p className={styles.block3Text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
    </div>

    {/* Блоки товаров */}
    <div>
      <div className={styles.block4}>
        <h4 className={styles.blockTitle}>Ассортимент</h4>
        <h2 className={styles.blockMainTitle}>ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
      </div>
        <div className={styles.productContainer}>
        <img className={styles.Back} src="/arrow.svg" alt="Back" />
        {products.map((product) => (
          <ProductBlock
            key={product.id}
            image={product.image}
            title={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
        <img className={styles.Next} src="/arrow.svg" alt="Next" />
      </div>
      {/*  */}
    </div>
  </div>
);

export default Home;
