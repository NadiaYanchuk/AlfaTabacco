import Image from "next/image";
import styles from "../styles/Navbar.module.css";

import React, { useState } from "react";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.menuContainer}>
      {/* Поиск */}
      <div className={styles.left}>
        <div
          className={styles.menuIcon}
          onClick={() => setSearchInput(!searchInput)}
        >
          {searchInput ? (
            <div className={styles.searchContainer}>
              <div className={styles.searchBackground}></div>
              <Image src="/search2.svg" width={30} height={30} alt="search" />
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
                autoFocus={searchInput}
              />
            </div>
          ) : (
            <Image src="/search.svg" width={30} height={30} alt="search" />
          )}
        </div>
      </div>

      {/* Логотип */}
      <div className={styles.center} onClick={handleMenuClick}>
        <div className={styles.siteName}>
          ALPHA{" "}
          <div className={styles.siteIcon}>
            <Image src="/logo.svg" width={40} height={40} alt="ALPHA TABACCO" />
          </div>{" "}
          TABACCO
        </div>
      </div>
      {/* Открытое меню */}
      {menuOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContent}>
            <a href="/hookahs">
              <div className={styles.menuItem}>Кальяны</div>
            </a>
            <a href="/a">
              <div className={styles.menuItem}>Сигареты</div>
            </a>
            <a href="/a">
              <div className={styles.menuItem}>Табак</div>
            </a>
            <a href="/a">
              <div className={styles.menuItem}>Самокрутки</div>
            </a>
          </div>
        </div>
      )}
      {/* Изменение языка */}
      <div className={styles.right}>
        <div className={styles.language}>
          <Image src="/language.svg" width={30} height={30} alt="Search" />
        </div>
        {/* Переход на другие страницы */}
        <a href="/">
          <div className={styles.icons}>
            <Image src="/accaunt.svg" width={25} height={30} alt="Accaunt" />
          </div>
        </a>
        <a href="/shopcart">
          <div className={styles.icons}>
            <Image src="/my-basket.svg" width={25} height={25} alt="Shopcart" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
