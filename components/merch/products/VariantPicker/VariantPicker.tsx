import { ProductVariantGroup } from '@chec/commerce.js/types/product-variant-group';
import { RadioGroup } from '@headlessui/react';
import { classNames } from 'lib/utils/classNames';
import React, { Fragment, useState } from 'react';
import { SizePicker, ColorPicker, GeneralPicker } from '@/merch/products';

// interface Props
//   extends Omit<
//     React.DetailedHTMLProps<
//       React.SelectHTMLAttributes<HTMLSelectElement>,
//       HTMLSelectElement
//     >,
//     'id' | 'defaultValue' | 'className' | 'children'
//   > {
//   variantGroups: ProductVariantGroup[];
//   defaultValues: any;
// }
interface Props {
  variantGroups: ProductVariantGroup[];
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

const VariantPicker = ({
  variantGroups = [],
  defaultValues = {},
  onChange,
}: Props) => {
  if (!variantGroups || variantGroups.length === 0) return null;

  return (
    <div className='mt-6 space-y-6'>
      {variantGroups.map(({ options, ...group }) => (
        <Fragment key={group.id}>
          {group.name === 'Color' && (
            <ColorPicker
              group={group}
              options={options}
              defaultValues={defaultValues}
              onChange={onChange}
            />
          )}
          {group.name === 'Size' && (
            <SizePicker
              group={group}
              options={options}
              defaultValues={defaultValues}
              onChange={onChange}
            />
          )}
          {group.name !== 'Color' && group.name !== 'Size' && (
            <GeneralPicker
              group={group}
              options={options}
              defaultValues={defaultValues}
              onChange={onChange}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default VariantPicker;
