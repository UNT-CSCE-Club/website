import { ProductVariantGroup } from '@chec/commerce.js/types/product-variant-group';

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    'id' | 'defaultValue' | 'className' | 'children'
  > {
  variantGroups: ProductVariantGroup[];
  defaultValues: any;
}

const VariantPicker = ({
  variantGroups = [],
  defaultValues = {},
  ...rest
}: Props) => {
  if (!variantGroups || variantGroups.length === 0) return null;

  return (
    <div className='space-y-2 md:space-y-0 md:space-x-2 md:flex'>
      {variantGroups.map(({ options, ...group }) => (
        <div key={group.id} className='relative w-32 rounded'>
          <label htmlFor={group.id}>{group.name}:</label>
          <select
            id={group.id}
            defaultValue={defaultValues[group.id]}
            className='block w-full py-1 pl-2 pr-6 leading-none text-black appearance-none'
            {...rest}
          >
            {options.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default VariantPicker;
