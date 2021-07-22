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

          <div className='p-4 pt-0 -mt-4 font-sans leading-tight'>
            <p>
              ...if it did, we'd offer you a{' '}
              <span className='font-serif italic'>100% real store credit</span>,
              but since it doesn't, we'd love for you to check out{' '}
              <a
                href='https://commercejs.com'
                target='_blank'
                rel='noopener nofollow'
                className='font-serif italic underline'
              >
                commercejs.com
              </a>{' '}
              and{' '}
              <a
                href='https://github.com/chec/commercejs-chopchop-demo'
                target='_blank'
                rel='noopener nofollow'
                className='font-serif italic underline'
              >
                the repo
              </a>{' '}
              for this store instead.
            </p>
            <div className='flex items-end justify-between mt-6 mb-1 font-serif'>
              {/* <Image
                src='/product-attributes/thanks.svg'
                width={110}
                height={48}
                alt='Thanks for visiting'
              /> */}
              <span className='ml-4 text-sm italic'>
                'Chop chop' what are you waiting for
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
