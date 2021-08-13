import { useState } from 'react';
import { Tab, RadioGroup, Disclosure } from '@headlessui/react';
import { Product as ProductType } from '@chec/commerce.js/types/product';
import useProduct from './useProduct';
import { classNames } from 'lib/utils/classNames';
import {
  ProductImages,
  VariantPicker,
  RelatedProducts,
} from '@/merch/products';
import {
  StarIcon,
  HeartIcon,
  MinusSmIcon,
  PlusSmIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

interface Props {
  product: ProductType;
}

// const product = {
//   name: 'Zip Tote Basket',
//   price: '$140',
//   rating: 4,
//   images: [
//     {
//       id: 1,
//       name: 'Angled view',
//       src:
//         'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
//       alt: 'Angled front view with bag zipped and handles upright.',
//     },
//     {
//       id: 2,
//       name: 'Angled view',
//       src: 'https://source.unsplash.com/random',
//       alt: 'Angled front view with bag zipped and handles upright.',
//     },
//     {
//       id: 3,
//       name: 'Angled view',
//       src: 'https://source.unsplash.com/random',
//       alt: 'Angled front view with bag zipped and handles upright.',
//     },
//     {
//       id: 4,
//       name: 'Angled view',
//       src:
//         'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
//       alt: 'Angled front view with bag zipped and handles upright.',
//     },
//   ],
//   colors: [
//     {
//       name: 'Washed Black',
//       bgColor: 'bg-gray-700',
//       selectedColor: 'ring-gray-700',
//     },
//     { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
//     {
//       name: 'Washed Gray',
//       bgColor: 'bg-gray-500',
//       selectedColor: 'ring-gray-500',
//     },
//   ],
//   description: `
//     <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertable straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable cavnas construction keeps your goods protected for all-day use.</p>
//   `,
//   details: [
//     {
//       name: 'Features',
//       items: [
//         'Multiple strap configurations',
//         'Spacious interior with top zip',
//         'Leather handle and tabs',
//         'Interior dividers',
//         'Stainless strap loops',
//         'Double stitched construction',
//         'Water-resistant',
//       ],
//     },
//     {
//       name: 'Words',
//       items: [
//         'Multiple strap configurations',
//         'Spacious interior with top zip',
//         'Leather handle and tabs',
//         'Interior dividers',
//         'Stainless strap loops',
//         'Double stitched construction',
//         'Water-resistant',
//       ],
//     },
//     {
//       name: 'Things',
//       items: [
//         'Multiple strap configurations',
//         'Spacious interior with top zip',
//         'Leather handle and tabs',
//         'Interior dividers',
//         'Stainless strap loops',
//         'Double stitched construction',
//         'Water-resistant',
//       ],
//     },
//   ],
// };

const colors = [
  {
    name: 'Washed Black',
    bgColor: 'bg-gray-700',
    selectedColor: 'ring-gray-700',
  },
  { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
  {
    name: 'Washed Gray',
    bgColor: 'bg-gray-500',
    selectedColor: 'ring-gray-500',
  },
];

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

// const relatedProducts = [
//   {
//     id: 1,
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     href: '#',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt:
//       'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '$140',
//   },
//   {
//     id: 2,
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     href: '#',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt:
//       'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '$140',
//   },
//   {
//     id: 3,
//     name: 'Zip Tote Basket',
//     color: 'White and black',
//     href: '#',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
//     imageAlt:
//       'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
//     price: '$140',
//   },
//   // More products...
// ];

const Product = ({ product }: Props) => {
  const {
    images,
    variantGroups,
    initialVariants,
    handleVariantChange,
    addToCart,
    relatedProducts,
  } = useProduct(product);

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  console.log(product);

  return (
    <>
      {/* <h1 className='text-4xl'>{product.name}</h1>
      <div
        className='mt-2 md:leading-relaxed lg:leading-loose lg:text-lg'
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      <ProductImages images={images} />
      <p>{product.price.formatted_with_symbol}</p>
      <VariantPicker
        variantGroups={variantGroups}
        defaultValues={initialVariants}
        onChange={handleVariantChange}
      />
      <button type='button' onClick={addToCart}>
        Add to Bag
      </button>
      <hr className='my-6 text-gray-400' />
      <RelatedProducts products={relatedProducts} /> */}

      <div className='sm:pt-16 my-container'>
        <div className='pb-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
          <ProductImages images={images} product={product} />

          {/* Product info */}
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

            <form className='mt-6'>
              {/* Colors */}
              <div>
                <h3 className='text-sm text-gray-600'>Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className='mt-2'
                >
                  <RadioGroup.Label className='sr-only'>
                    Choose a color
                  </RadioGroup.Label>
                  <div className='flex items-center space-x-3'>
                    {/* {product.colors.map(color => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as='p' className='sr-only'>
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden='true'
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))} */}
                  </div>
                </RadioGroup>
              </div>

              <div className='flex mt-10 sm:flex-col1'>
                <button
                  type='submit'
                  className='flex items-center justify-center flex-1 max-w-xs px-8 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-lg bg-primary hover:bg-primary-light dark:shadow-2xl'
                >
                  Add to bag
                </button>
              </div>
            </form>

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
