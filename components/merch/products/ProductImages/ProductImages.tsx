import { Asset } from '@chec/commerce.js/types/asset';
import Image from 'next/image';

interface Props {
  images: Asset[];
}

const ProductImages = ({ images = [] }: Props) => {
  if (!images || images.length === 0) return null;

  return (
    <div className='mt-2 space-y-2 overflow-y-scroll h-72'>
      {images.map(({ id, url, image_dimensions }) => (
        <div key={id} className='w-64'>
          <Image
            key={id}
            src={url}
            width={image_dimensions.width}
            height={image_dimensions.height}
            className='transition-all rounded-lg hover:rounded-none'
            quality={100}
            alt=''
          />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
