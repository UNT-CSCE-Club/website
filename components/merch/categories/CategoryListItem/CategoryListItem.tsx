import { Category } from '@chec/commerce.js/types/category';

const CategoryListItem = ({ name }: Category) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default CategoryListItem;
