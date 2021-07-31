import Link from 'next/link';
import { Category } from '@chec/commerce.js/types/category';
import { CategoryListItem } from '@/merch/categories';

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  if (!categories) return null;

  return (
    <ul>
      {categories.map(category => (
        <li key={category.slug}>
          <Link href={`/merch/categories/${category.slug}`}>
            <a>
              <CategoryListItem category={category} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
