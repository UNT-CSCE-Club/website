import { Asset } from '@chec/commerce.js/types/asset';
import { Product } from '@chec/commerce.js/types/product';
import { Tab } from '@headlessui/react';
import { classNames } from 'lib/utils/classNames';
import Image from 'next/image';

interface Props {
  images: Asset[];
  product: Product;
}

const ProductImages = ({ images = [], product }: Props) => {
  if (!images || images.length === 0) return null;

  return (
    // <div className='mt-2 space-y-2 overflow-y-scroll h-72'>
    //   {images.map(({ id, url, image_dimensions }) => (
    //     <div key={id} className='w-64'>
    //       <Image
    //         key={id}
    //         src={url}
    //         width={image_dimensions.width}
    //         height={image_dimensions.height}
    //         className='transition-all rounded-lg hover:rounded-none'
    //         quality={100}
    //         alt=''
    //       />
    //     </div>
    //   ))}
    // </div>

    <Tab.Group as='div' className='flex flex-col-reverse'>
      {/* Image selector */}
      <div className='hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images.map(image => (
            <Tab
              key={image.id}
              className='relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50'
            >
              {({ selected }) => (
                <>
                  <div className='absolute inset-0 overflow-hidden rounded-md'>
                    <img
                      src={image.url}
                      alt={image?.description || `${product.name} image`}
                      width={image.image_dimensions.width}
                      height={image.image_dimensions.height}
                      className='object-cover object-center w-full h-full'
                    />
                  </div>
                  <div
                    className={classNames(
                      selected ? 'ring-primary' : 'ring-transparent',
                      'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                    )}
                    aria-hidden='true'
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
        {images.map(image => (
          <Tab.Panel key={image.id}>
            <img
              src={image.url}
              alt={image?.description || `${product.name} image`}
              width={image.image_dimensions.width}
              height={image.image_dimensions.height}
              className='object-cover object-center w-full h-full sm:rounded-lg'
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductImages;
