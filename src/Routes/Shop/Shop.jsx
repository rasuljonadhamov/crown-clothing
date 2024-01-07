import { Fragment, useContext } from "react";
import ProductCard from "../../components/Product-Card/Product-Card";
import "./Shop.scss";
import { CategoriesContext } from "../../contexts/categories.context";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
      {/* <div className="products-container">
        {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div> */}
    </Fragment>
  );
};

export default Shop;
