import React from 'react';
import dynamic from 'next/dynamic';
import { DogeSvg } from 'components/ui';

interface Props extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const DynamicIcon = ({ name, ...rest }: Props) => {
  let Icon;

  const iconSet = name.slice(0, 2);

  if (name === 'doge') return <DogeSvg className='w-6 h-6' />;

  switch (iconSet) {
    case 'Fi':
      Icon = dynamic((): any =>
        import('react-icons/fi').then(mod => mod[name])
      );
      break;
    case 'Bi':
      Icon = dynamic((): any =>
        import('react-icons/bi').then(mod => mod[name])
      );
      break;
    case 'Cg':
      Icon = dynamic((): any =>
        import('react-icons/cg').then(mod => mod[name])
      );
      break;
    case 'Fa':
      Icon = dynamic((): any =>
        import('react-icons/fa').then(mod => mod[name])
      );
      break;
    default:
      Icon = dynamic((): any =>
        import('react-icons/fi').then(mod => mod[name])
      );
      break;
  }

  return <Icon {...rest} />;
};

export default DynamicIcon;
