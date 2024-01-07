import { useContext } from "react";
import "./Shop.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/Category-Preview/CategoryPreview";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </div>
  );
};

export default Shop;
