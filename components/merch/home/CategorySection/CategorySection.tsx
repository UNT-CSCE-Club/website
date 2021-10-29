import Link from 'next/link';
import { Category } from '@chec/commerce.js/types/category';

interface Props {
  // categories: Category[];
  categories: any; // bad type definition from @types/chec__commerce.js
}

const CategorySection = ({ categories }: Props) => {
  if (!categories || categories?.length < 1) {
    return null;
  }

  const firstCategory = categories[0];

  return (
    <section aria-labelledby='category-heading' className='bg-white'>
      <div className='py-24 sm:py-32 my-container'>
        <div className='sm:flex sm:items-baseline sm:justify-between'>
          <h2
            id='category-heading'
            className='text-2xl font-extrabold tracking-tight text-gray-900'
          >
            Shop by Category
          </h2>
          <Link href='/merch/products'>
            <a className='hidden text-sm font-semibold text-primary dark:text-primary-light hover:text-primary-light dark:hover:text-primary sm:block'>
              Browse all categories<span aria-hidden='true'> &rarr;</span>
            </a>
          </Link>
        </div>

        <div className='grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8'>
          <div className='overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2'>
            {firstCategory.assets.length > 0 &&
            firstCategory?.assets[0]?.is_image ? (
              <img
                // src='https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg'
                // alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                src={firstCategory.assets[0].url}
                alt={
                  firstCategory.assets[0]?.description ||
                  `${firstCategory.name} image`
                }
                className='object-cover object-center group-hover:opacity-75'
              />
            ) : (
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg'
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className='object-cover object-center group-hover:opacity-75'
              />
            )}
            <div
              aria-hidden='true'
              className='opacity-50 bg-gradient-to-b from-transparent to-black'
            />
            <div className='flex items-end p-6'>
              <div>
                <h3 className='font-semibold text-white'>
                  <Link href={`/merch/categories/${firstCategory.slug}`}>
                    <a>
                      <span className='absolute inset-0' />
                      {firstCategory.name}
                    </a>
                  </Link>
                </h3>
                <p aria-hidden='true' className='mt-1 text-sm text-white'>
                  Shop now
                </p>
              </div>
            </div>
          </div>
          {categories.slice(1, 3).map(category => (
            <div
              key={category?.id}
              className='overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:relative sm:aspect-none md:aspect-h-1 md:aspect-w-2 sm:h-full'
            >
              {category.assets.length > 0 && category?.assets[0]?.is_image ? (
                <img
                  // src='https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg'
                  // alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  src={category.assets[0].url}
                  alt={
                    category.assets[0]?.description || `${category.name} image`
                  }
                  className='object-cover object-center group-hover:opacity-75'
                />
              ) : (
                <img
                  src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
                  alt='Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.'
                  className='object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full'
                />
              )}
              <div
                aria-hidden='true'
                className='opacity-50 bg-gradient-to-b from-transparent to-black sm:absolute sm:inset-0'
              />
              <div className='flex items-end p-6 sm:absolute sm:inset-0'>
                <div>
                  <h3 className='font-semibold text-white'>
                    <Link href={`/merch/categories/${category.slug}`}>
                      <a>
                        <span className='absolute inset-0' />
                        {category.name}
                      </a>
                    </Link>
                  </h3>
                  <p aria-hidden='true' className='mt-1 text-sm text-white'>
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-6 sm:hidden'>
          <Link href='/merch/products'>
            <a className='block text-sm font-semibold text-primary dark:text-primary-light hover:text-primary-light dark:hover:text-primary'>
              Browse all categories<span aria-hidden='true'> &rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
