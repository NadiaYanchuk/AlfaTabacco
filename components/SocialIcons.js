import React from "react";
import styles from '../styles/SocialIcons.module.css';

const SocialIcons = () => {
  return (
    <div className={styles.socialIconsContainer}>
      <a className={styles.socialIcon} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="/instagramm.svg" alt="Inst" size={65} />
      </a>
      <a className={styles.socialIcon} href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src="/twitter.svg" alt="Twitter" size={65} />
      </a>
      <a className={styles.socialIcon} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src="/facebook.svg" alt="Facebook" size={65} />
      </a>
    </div>
  );
};

export default SocialIcons;