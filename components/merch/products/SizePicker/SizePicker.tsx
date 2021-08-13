import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import {
  ProductVariantGroup,
  ProductVariantOption,
} from '@chec/commerce.js/types/product-variant-group';
import { classNames } from 'lib/utils/classNames';

interface Props {
  group: Omit<ProductVariantGroup, 'options'>;
  options: ProductVariantOption[];
  defaultValues: any;
  onChange: ({
    target: { id, value },
  }: {
    target: {
      id: any;
      value: any;
    };
  }) => void;
}

const SizePicker = ({ group, options, defaultValues, onChange }: Props) => {
  const [sizeValue, setSizeValue] = useState(defaultValues[group.id]);

  return (
    <div className='mt-8'>
      <h2 className='text-sm font-medium text-gray-900'>Size</h2>

      <RadioGroup
        value={sizeValue}
        onChange={value => {
          setSizeValue(value);
          onChange({ target: { id: group.id, value } });
        }}
        className='mt-2'
      >
        <RadioGroup.Label className='sr-only'>Choose a size</RadioGroup.Label>
        <div className='grid grid-cols-3 gap-3 sm:grid-cols-6'>
          {options.map(option => (
            <RadioGroup.Option
              key={option.name}
              value={option.id}
              className={({ active, checked }) =>
                classNames(
                  // option.inStock
                  //   ? 'cursor-pointer focus:outline-none'
                  //   : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-2 ring-offset-2 ring-primary-light' : '',
                  checked
                    ? 'bg-primary border-transparent text-white hover:bg-primary-dark'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border focus:outline-none cursor-pointer rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                )
              }
              // disabled={!option.inStock}
            >
              <RadioGroup.Label as='p' className='select-none'>
                {option.name}
              </RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default SizePicker;
