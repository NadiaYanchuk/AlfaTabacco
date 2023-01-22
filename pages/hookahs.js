import React, { useState } from "react";
import Heading from "../components/Heading";
import styles from "../styles/Hookahs.module.css";
import ProductBlock from "../components/ProductBlock";

const products = [
  { name: "Product 1", image: "/product.png", price: "$10" },
  { name: "Product 2", image: "/product.png", price: "$20" },
  { name: "Product 3", image: "/product.png", price: "$30" },
  { name: "Product 4", image: "/product.png", price: "$40" },
  { name: "Product 5", image: "/product.png", price: "$50" },
  { name: "Product 6", image: "/product.png", price: "$60" },
  { name: "Product 7", image: "/product.png", price: "$70" },
  { name: "Product 8", image: "/product.png", price: "$80" },
  { name: "Product 9", image: "/product.png", price: "$90" },
  { name: "Product 10", image: "/product.png", price: "$100" },
  { name: "Product 11", image: "/product.png", price: "$10" },
  { name: "Product 12", image: "/product.png", price: "$20" },
  { name: "Product 13", image: "/product.png", price: "$30" },
  { name: "Product 14", image: "/product.png", price: "$40" },
  { name: "Product 15", image: "/product.png", price: "$50" },
  { name: "Product 16", image: "/product.png", price: "$60" },
  { name: "Product 17", image: "/product.png", price: "$70" },
  { name: "Product 18", image: "/product.png", price: "$80" },
  { name: "Product 19", image: "/product.png", price: "$90" },
  { name: "Product 20", image: "/product.png", price: "$100" },
  { name: "Product 21", image: "/product.png", price: "$10" },
  { name: "Product 22", image: "/product.png", price: "$20" },
  { name: "Product 23", image: "/product.png", price: "$30" },
  { name: "Product 24", image: "/product.png", price: "$40" },
  { name: "Product 25", image: "/product.png", price: "$50" },
  { name: "Product 26", image: "/product.png", price: "$60" },
  { name: "Product 27", image: "/product.png", price: "$70" },
  { name: "Product 28", image: "/product.png", price: "$80" },
  { name: "Product 29", image: "/product.png", price: "$90" },
  { name: "Product 30", image: "/product.png", price: "$100" },
];

const ProductSlider = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfProductsPerPage = 9;
  const numberOfPages = Math.ceil(products.length / numberOfProductsPerPage);

  // const handlePrevClick = () => {
  // if (currentPage === 1) {
  // setCurrentPage(numberOfPages);
  // } else {
  // setCurrentPage(currentPage - 1);
  // }
  // };
  // const handleNextClick = () => {
  // if (currentPage === numberofPages) {
  // setCurrentPage(1);
  // } else {
  // setCurrentPage(currentPage + 1);
  // }
  // };

  const renderProductBlocks = () => {
    const startIndex = (currentPage - 1) * numberOfProductsPerPage;
    const endIndex = startIndex + numberOfProductsPerPage;
    return products.slice(startIndex, endIndex).map((product, index) => (
      <div className={styles.productBlockWrapper} key={index}>
        <ProductBlock
          image={product.image}
          title={product.name}
          price={product.price}
        />
      </div>
    ));
  };
  return (
    <div className={styles.productSlider}>
      {/* Название */}
      <Heading pageTitle="Кальяны" />
      {/* Критерии */}
      {/* Товары */}
      <div className={styles.productBlockContainer}>
        {renderProductBlocks()}
      </div>
      <div className={styles.pageNumbers}>
        {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={styles.pageNumberButton}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ProductSlider;
