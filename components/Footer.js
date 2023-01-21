import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.line}>
          <h3 className={styles.title}>ALPHA TOBACCO</h3>
          <div className={styles.menu}>
            <a href="#">Ассортимент</a>
            <a href="#">Корзина</a>
            <a href="#">Контакты</a>
          </div>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagramm.svg" alt="Inst" size={65} />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter.svg" alt="Twitter" size={65} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.svg" alt="Facebook" size={65} />
            </a>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.line}>
          <div className={styles.credits}>
            <p>Created by John Doe</p>
            <p>© 2023, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

