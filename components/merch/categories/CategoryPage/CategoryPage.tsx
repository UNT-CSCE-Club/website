import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Transition, Dialog, Disclosure, Menu } from '@headlessui/react';
import { classNames } from 'lib/utils/classNames';
import { Category } from '@chec/commerce.js/types/category';
import { Product } from '@chec/commerce.js/types/product';
import { ProductList } from '@/merch/products';
import {
  XIcon,
  MinusSmIcon,
  PlusSmIcon,
  ChevronDownIcon,
  ViewGridIcon,
  FilterIcon,
} from '@heroicons/react/outline';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
];

interface CategoryPageProps {
  products: Product[];
  category?: Category;
  categoriesList: Category[];
}

const CategoryPage = ({
  products,
  category,
  categoriesList,
}: CategoryPageProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isLargeGrid, setIsLargeGrid] = useState(false);

  // console.log({ category, categoriesList, products });

  return (
    <>
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-40 flex lg:hidden'
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <div className='relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl'>
              <div className='flex items-center justify-between px-4'>
                <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                <button
                  type='button'
                  className='flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md'
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>

              {/* Filters */}
              <form className='mt-4 border-t border-gray-200'>
                <h3 className='sr-only'>Categories</h3>
                <ul role='list' className='px-2 py-3 font-medium text-gray-900'>
                  <li>
                    <Link href='/merch/products'>
                      <a
                        className='block px-2 py-3'
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        All Products
                      </a>
                    </Link>
                  </li>
                  {categoriesList.map(category => (
                    <li key={category.name}>
                      <Link href={`/merch/categories/${category.slug}`}>
                        <a
                          className='block px-2 py-3'
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          {category.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>

                {filters.map(section => (
                  <Disclosure
                    as='div'
                    key={section.id}
                    className='px-4 py-6 border-t border-gray-200'
                  >
                    {({ open }) => (
                      <>
                        <h3 className='flow-root -mx-2 -my-3'>
                          <Disclosure.Button className='flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500'>
                            <span className='font-medium text-gray-900'>
                              {section.name}
                            </span>
                            <span className='flex items-center ml-6'>
                              {open ? (
                                <MinusSmIcon
                                  className='w-5 h-5'
                                  aria-hidden='true'
                                />
                              ) : (
                                <PlusSmIcon
                                  className='w-5 h-5'
                                  aria-hidden='true'
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className='pt-6'>
                          <div className='space-y-6'>
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className='flex items-center'
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type='checkbox'
                                  defaultChecked={option.checked}
                                  className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className='flex-1 min-w-0 ml-3 text-gray-500'
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <div className='my-container'>
        <div className='relative z-10 items-end justify-between pt-10 pb-6 border-b border-gray-200 lg:flex'>
          <header className='mb-10 lg:mb-0'>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
              {category?.name || 'All Products'}
            </h1>
            {!category ? (
              <p className='mt-4 text-base text-gray-500 lg:max-w-2xl'>
                The entire CSCE Club collection
              </p>
            ) : (
              <p className='mt-4 text-base text-gray-500 lg:max-w-2xl'>
                {category?.description || 'CSCE Club collection'}
              </p>
            )}
          </header>

          <div className='flex items-center justify-between'>
            <Menu as='div' className='relative inline-block text-left'>
              <div>
                <Menu.Button className='inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900'>
                  Sort
                  <ChevronDownIcon
                    className='flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute left-0 w-40 mt-2 origin-top-left bg-white rounded-md shadow-2xl lg:left-auto lg:right-0 lg:origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    {sortOptions.map(option => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? 'font-medium text-gray-900'
                                : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <div className='flex items-center'>
              <button
                type='button'
                onClick={() => setIsLargeGrid(!isLargeGrid)}
                className='hidden p-2 ml-5 -m-2 text-gray-400 lg:block sm:ml-7 hover:text-gray-500'
              >
                <span className='sr-only'>View grid</span>
                <ViewGridIcon className='w-5 h-5' aria-hidden='true' />
              </button>
              <button
                type='button'
                className='p-2 ml-4 -m-2 text-gray-400 sm:ml-6 hover:text-gray-500 lg:hidden'
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className='sr-only'>Filters</span>
                <FilterIcon className='w-5 h-5' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>

        <section aria-labelledby='products-heading' className='pt-6 pb-24'>
          <h2 id='products-heading' className='sr-only'>
            Products
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10'>
            {/* Filters */}
            <form className='hidden lg:block'>
              <h3 className='sr-only'>Categories</h3>
              <ul
                role='list'
                className='pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200'
              >
                <li>
                  <Link href='/merch/products'>
                    <a>All Products</a>
                  </Link>
                </li>
                {categoriesList.map(category => (
                  <li key={category.name}>
                    <Link href={`/merch/categories/${category.slug}`}>
                      <a>{category.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>

              {filters.map(section => (
                <Disclosure
                  as='div'
                  key={section.id}
                  className='py-6 border-b border-gray-200'
                >
                  {({ open }) => (
                    <>
                      <h3 className='flow-root -my-3'>
                        <Disclosure.Button className='flex items-center justify-between w-full py-3 text-sm text-gray-400 hover:text-gray-500'>
                          <span className='font-medium text-gray-900'>
                            {section.name}
                          </span>
                          <span className='flex items-center ml-6'>
                            {open ? (
                              <MinusSmIcon
                                className='w-5 h-5'
                                aria-hidden='true'
                              />
                            ) : (
                              <PlusSmIcon
                                className='w-5 h-5'
                                aria-hidden='true'
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className='pt-6'>
                        <div className='space-y-4'>
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className='flex items-center'
                            >
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type='checkbox'
                                defaultChecked={option.checked}
                                className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className='ml-3 text-sm text-gray-600'
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>

            {!products ? (
              <div className='lg:col-span-3'>
                <div className='grid text-3xl font-medium border-4 border-gray-200 border-dashed rounded-lg lg:text-4xl place-content-center h-96 lg:h-full'>
                  Coming soon
                </div>
              </div>
            ) : (
              <>
                <div className='lg:col-span-3 xl:hidden'>
                  <ProductList products={products} large={isLargeGrid} />
                </div>
                <div className='hidden lg:col-span-3 xl:block'>
                  <ProductList products={products} large={!isLargeGrid} />
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoryPage;
