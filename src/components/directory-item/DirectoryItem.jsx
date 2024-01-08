import { useNavigate } from "react-router-dom";
import "./DirectoryItem.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const handleClick = () => navigate(route);
  return (
    <div className="directory-item-container" onClick={handleClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
