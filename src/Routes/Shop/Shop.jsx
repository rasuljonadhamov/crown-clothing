import Category from "../Category/Category";
import CategoriesPreview from "../categories-preview/categories.preview";
import "./Shop.scss";
import { Route, Routes } from "react-router-dom";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
