import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

import React, { useState } from "react";

const navigation = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Аккаунт", path: "/my-account" },
  { id: 3, title: "Корзина", path: "/shopcart" },
];

// const Navbar = () => {
//   const { pathname } = useRouter();

//   return (
//     <nav className={styles.nav}>
//       <div className={styles.logo}>
//         <Image src="/logo.svg" width={40} height={40} alt="ALPHA TABACCO" />
//       </div>
//       <div className={styles.links}>
//         <a href="/">item</a>
//         <a href="/posts">item</a>
//         <a href="contacts">item</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const { pathname } = useRouter();

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


        <a href="/my-account">
          <div className={styles.icons}>
            <Image src="/accaunt.svg" width={25} height={30} alt="Accaunt" />
          </div>
        </a>
        <a href="/shopcart">
          <div className={styles.icons}>
            <Image src="/my-basket.svg" width={25} height={25} alt="My basket" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
