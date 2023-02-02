import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import ProductSlider from "../components/ProductSlider";
import React, { useState } from "react";

const Home = () => {
  const [showPage, setShowPage] = useState(false);

  const handleShowPage = () => {
    setShowPage(true);
  };

  return (
    <div>
      {!showPage && (
        <div className={styles.overlay}>
          <div className={styles.message}>
            <p>Вам уже исполнилось 18 лет?</p>
            <div className={styles.buttons}>
              <button className={styles.buttonNo}>Нет</button>
              <button className={styles.buttonYes} onClick={handleShowPage}>Да</button>
            </div>
          </div>
        </div>
      )}
      {showPage && (
        <div>
          {
            // Главная страница
            <div className={styles.wrapper}>
              <Head>
                <title>Home</title>
              </Head>

              {/* Меню */}
              <Header />

              {/* Главный экран */}
              <div className={styles.container}>
                <img
                  className={styles.bgImage}
                  src="/main.png"
                  alt="Background"
                />
                <div className={styles.content}>
                  <h1 className={styles.title}>ALPHA TABACCO</h1>
                  <p className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                  <p className={styles.block3Text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
              </div>

              {/* Блоки товаров */}
              <div className={styles.block4}>
                {/* <div className={styles.block4Text}>
        <h4 className={styles.blockTitle}>Ассортимент</h4>
        <h2 className={styles.blockMainTitle}>ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
      </div> */}
                <ProductSlider />
              </div>
            </div>
          }
          {/* Футер */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
