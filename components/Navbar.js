import Image from "next/image";
import styles from "../styles/Navbar.module.css";

import React, { useState } from "react";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState(false);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.left}>
        <div
          className={styles.menuIcon}
          onClick={() => setSearchInput(!searchInput)}
        >
          <Image src="/search.svg" width={30} height={30} alt="search" />
        </div>
        {searchInput && (
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        )}
      </div>

      <div className={styles.center}>
        <div className={styles.siteName}>
          ALPHA{" "}
          <div className={styles.siteIcon}>
            <Image src="/logo.svg" width={40} height={40} alt="ALPHA TABACCO" />
          </div>{" "}
          TABACCO
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.language}>
          <Image src="/language.svg" width={30} height={30} alt="Search" />
        </div>
        {/* Переход на другие страницы */}
        <a href="/my-account">
          <div className={styles.icons}>
            <Image src="/accaunt.svg" width={25} height={30} alt="Accaunt" />
          </div>
        </a>
        <a href="/shopcart/products">
          <div className={styles.icons}>
            <Image
              src="/my-basket.svg"
              width={25}
              height={25}
              alt="Shopcart"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
