import { categories } from "../../constants";
import "./category.scss";

const CategoryCard = () => {
  return (
    <div className="categories-container">
      {categories.map(({ title, img, id }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
