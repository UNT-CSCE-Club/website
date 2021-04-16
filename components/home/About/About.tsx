import React from 'react';
import { ChatAlt2Icon, UserGroupIcon } from '@heroicons/react/outline';

const About = () => {
  return (
    <section id='about' className='relative py-16 overflow-hidden'>
      <header className='mb-16 lg:text-center my-container'>
        <h2 className='text-base font-semibold tracking-wide uppercase text-primary'>
          About
        </h2>
        <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
          Our community is centered around Discord
        </p>
        <p className='max-w-4xl mt-4 text-xl text-gray-500 lg:mx-auto'>
          Meetings on Thursdays at 7:00pm in the General Voice Chat. Possimus
          magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </header>
      <section className=''>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div>
                <span className='flex items-center justify-center w-12 h-12 rounded-md bg-primary'>
                  <ChatAlt2Icon
                    className='w-6 h-6 text-white'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Discussions with your peers
                </h3>
                <p className='mt-4 text-lg text-gray-500'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className='mt-6'>
                  <a
                    href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL}
                    className='inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src='/images/discord-chat-light.png'
                alt='Discord chat screenshot'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='relative mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div>
                <span className='flex items-center justify-center w-12 h-12 rounded-md bg-primary'>
                  <UserGroupIcon
                    className='w-6 h-6 text-white'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Talks from members and guests
                </h3>
                <p className='mt-4 text-lg text-gray-500'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className='mt-6'>
                  <a
                    href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL}
                    className='inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className='pt-6 mt-8 border-t border-gray-200'>
              <blockquote>
                <div>
                  <p className='text-base text-gray-500'>
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className='mt-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src='https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                        alt=''
                      />
                    </div>
                    <div className='text-base font-medium text-gray-700'>
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src='/images/discord-voicechat-light.png'
                alt='Discord voicechat screenshot'
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
