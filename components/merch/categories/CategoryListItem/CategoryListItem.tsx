import { Category } from '@chec/commerce.js/types/category';

interface Props {
  category: Category;
}

const CategoryListItem = ({ category: { name } }: Props) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default CategoryListItem;
