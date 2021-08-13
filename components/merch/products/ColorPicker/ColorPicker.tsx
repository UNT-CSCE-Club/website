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

const ColorPicker = ({ group, options, defaultValues, onChange }: Props) => {
  const [colorValue, setColorValue] = useState(defaultValues[group.id]);

  return (
    <div>
      <h3 className='text-sm text-gray-600'>Color</h3>

      <RadioGroup
        value={colorValue}
        onChange={value => {
          setColorValue(value);
          onChange({ target: { id: group.id, value } });
        }}
        className='mt-2'
      >
        <RadioGroup.Label className='sr-only'>Choose a color</RadioGroup.Label>
        <div className='flex items-center space-x-3'>
          {options.map(option => (
            <RadioGroup.Option
              key={option.name}
              value={option.id}
              className={({ active, checked }) =>
                classNames(
                  'ring-gray-900 dark:ring-gray-100',
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-2' : '',
                  '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                )
              }
            >
              <RadioGroup.Label as='p' className='sr-only'>
                {option.name}
              </RadioGroup.Label>
              <span
                aria-hidden='true'
                className='w-8 h-8 border border-gray-500 border-opacity-75 rounded-full'
                style={{ backgroundColor: option.name }}
              />
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default ColorPicker;
