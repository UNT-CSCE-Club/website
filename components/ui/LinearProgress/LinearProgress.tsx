import { motion } from 'framer-motion';

const LinearProgress = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full h-1 overflow-hidden'>
      <motion.div
        className='h-1 bg-gradient-to-r from-transparent to-primary-light'
        initial={{ x: '-100vw' }}
        animate={{ x: '100vw' }}
        transition={{ loop: Infinity, duration: 1.3 }}
      />
    </div>
  );
};

export default LinearProgress;
