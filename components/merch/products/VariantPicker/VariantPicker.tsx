const VariantPicker = ({
  variantGroups = [],
  defaultValues = {},
  ...props
}) => {
  if (!variantGroups || variantGroups.length === 0) return null;

  return (
    <div className='space-x-2 md:flex'>
      {variantGroups.map(({ options, ...group }) => (
        <div
          key={group.id}
          className='relative w-32 overflow-hidden border border-black rounded'
        >
          <label htmlFor={group.id} className='sr-only'>
            {group.name}:
          </label>

          <select
            id={group.id}
            defaultValue={defaultValues[group.id]}
            className='block w-full py-1 pl-2 pr-6 leading-none appearance-none'
            {...props}
          >
            {options.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          {/* <div className='absolute inset-y-0 right-0 flex items-center px-2 text-black pointer-events-none'>
            <Chevron />
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default VariantPicker;
