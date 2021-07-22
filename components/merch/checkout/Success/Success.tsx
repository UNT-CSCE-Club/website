import Image from 'next/image';

function Success({ has }) {
  return (
    <div className='h-full lg:flex lg:items-center lg:space-x-12 xl:space-x-24'>
      <div className='lg:w-1/2 '>
        <h1 className='font-serif text-2xl italic font-medium md:text-4xl lg:text-5xl xl:text-6xl'>
          Thanks!
        </h1>
        <p className='mt-3 font-sans text-lg md:text-xl'>
          {has?.digital_fulfillment
            ? 'You’ll receive an email with your receipt, and a backup link to re-download your purchase'
            : 'You’ll receive an email with your receipt, and tracking information.'}
        </p>
      </div>
      <div className='lg:w-1/2 lg:flex lg:items-center lg:justify-center'>
        <div className='max-w-lg mx-auto my-24 transform skew-y-12 bg-white shadow-thank-you -rotate-25 lg:mt-48'>
          <div className='ml-4'>
            {/* <Image
              src='/checkout/doesntexist.svg'
              width={384}
              height={126}
              alt="ChopChop doesn't exist!"
              layout='responsive'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
