import Link from 'next/link';

const MerchHero = () => {
  return (
    <header className='relative overflow-hidden'>
      <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
        <div className='relative my-container sm:static'>
          <div className='sm:max-w-lg'>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 font sm:text-6xl'>
              Support the club with merch
            </h1>
            <p className='mt-4 text-xl text-gray-500'>
              We don't charge membership fees or dues, so selling merchandise
              keeps things rolling. Grab some awesome swag and help out!
            </p>
          </div>
          <div>
            <div className='mt-10'>
              {/* Decorative image grid */}
              <div
                aria-hidden='true'
                className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full xl:max-w-screen-2xl'
              >
                <div className='absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                  <div className='flex items-center space-x-6 lg:space-x-8'>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                      <div className='h-64 overflow-hidden rounded-lg w-44'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 overflow-hidden rounded-lg w-44'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                      <div className='h-64 overflow-hidden rounded-lg w-44'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                      <div className='h-64 overflow-hidden rounded-lg w-44'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                    </div>
                    <div className='grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8'>
                      <div className='h-64 overflow-hidden rounded-lg w-44'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                      <div className='h-64 overflow-hidden rounded-lg w-44'>
                        <img
                          src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                          alt=''
                          className='object-cover object-center w-full h-full'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href='/merch/products'>
                <a className='inline-block px-8 py-3 font-medium text-center text-white border border-transparent rounded-md shadow-lg bg-primary hover:bg-primary-light dark:shadow-2xl'>
                  Start Shopping
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MerchHero;
