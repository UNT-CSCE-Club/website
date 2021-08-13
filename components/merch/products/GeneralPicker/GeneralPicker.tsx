import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { classNames } from 'lib/utils/classNames';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import {
  ProductVariantGroup,
  ProductVariantOption,
} from '@chec/commerce.js/types/product-variant-group';

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

const GeneralPicker = ({ group, options, defaultValues, onChange }: Props) => {
  const [selected, setSelected] = useState(options[0]);
  // console.log({ default: defaultValues[group.id], options });
  return (
    <Listbox
      value={selected}
      onChange={value => {
        setSelected(value);
        onChange({ target: { id: group.id, value: value.id } });
      }}
    >
      {({ open }) => (
        <div className='relative max-w-xs'>
          <Listbox.Label className='block text-sm font-medium text-gray-700'>
            {group.name}
          </Listbox.Label>
          <div className='relative mt-2'>
            <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary sm:text-sm'>
              <span className='block truncate'>{selected.name}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon
                  className='w-5 h-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {options.map(option => (
                  <Listbox.Option
                    key={option.id}
                    value={option}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-primary' : 'text-gray-900',
                        'select-none relative py-2 pl-3 pr-9'
                      )
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-primary',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className='w-5 h-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default GeneralPicker;
