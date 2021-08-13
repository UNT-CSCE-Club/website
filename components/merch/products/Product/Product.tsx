import { Disclosure } from '@headlessui/react';
import { Product as ProductType } from '@chec/commerce.js/types/product';
import useProduct from './useProduct';
import { classNames } from 'lib/utils/classNames';
import {
  ProductImages,
  VariantPicker,
  RelatedProducts,
} from '@/merch/products';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

interface Props {
  product: ProductType;
}

const details = [
  {
    name: 'Features',
    items: [
      'Multiple strap configurations',
      'Spacious interior with top zip',
      'Leather handle and tabs',
      'Interior dividers',
      'Stainless strap loops',
      'Double stitched construction',
      'Water-resistant',
    ],
  },
  {
    name: 'Words',
    items: [
      'Multiple strap configurations',
      'Spacious interior with top zip',
      'Leather handle and tabs',
      'Interior dividers',
      'Stainless strap loops',
      'Double stitched construction',
      'Water-resistant',
    ],
  },
  {
    name: 'Things',
    items: [
      'Multiple strap configurations',
      'Spacious interior with top zip',
      'Leather handle and tabs',
      'Interior dividers',
      'Stainless strap loops',
      'Double stitched construction',
      'Water-resistant',
    ],
  },
];

const Product = ({ product }: Props) => {
  const {
    images,
    variantGroups,
    initialVariants,
    handleVariantChange,
    addToCart,
    relatedProducts,
  } = useProduct(product);

  return (
    <>
      <div className='sm:pt-16 my-container'>
        <div className='pb-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
          <ProductImages images={images} product={product} />

          <div className='px-4 mt-10 sm:px-0 sm:mt-16 lg:mt-0'>
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
              {product.name}
            </h1>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-3xl text-gray-900'>
                {product.price.formatted_with_symbol}
              </p>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>
              <div
                className='space-y-6 text-base text-gray-700'
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <VariantPicker
              variantGroups={variantGroups}
              defaultValues={initialVariants}
              onChange={handleVariantChange}
            />

            <div className='flex mt-10'>
              <button
                type='button'
                onClick={addToCart}
                className='flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-lg bg-primary hover:bg-primary-light focus:ring-primary dark:shadow-2xl'
              >
                Add to bag
              </button>
            </div>

            <section aria-labelledby='details-heading' className='mt-12'>
              <h2 id='details-heading' className='sr-only'>
                Additional details
              </h2>
              <div className='border-t divide-y divide-gray-200'>
                {details.map(detail => (
                  <Disclosure as='div' key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className='relative flex items-center justify-between w-full py-6 text-left group'>
                            <span
                              className={classNames(
                                open
                                  ? 'text-primary dark:text-primary-light'
                                  : 'text-gray-900 dark:text-white',
                                'text-sm font-medium'
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className='flex items-center ml-6'>
                              {open ? (
                                <MinusSmIcon
                                  className='block w-6 h-6 text-primary group-hover:text-primary-light dark:text-primary-light dark:group-hover:text-primary'
                                  aria-hidden='true'
                                />
                              ) : (
                                <PlusSmIcon
                                  className='block w-6 h-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-200 dark:group-hover:text-white'
                                  aria-hidden='true'
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as='div'
                          className='pb-6 prose-sm prose'
                        >
                          <ul role='list'>
                            {detail.items.map(item => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </div>
    </>
  );
};

export default Product;
