import React from 'react';
import { ChatAlt2Icon, UserGroupIcon } from '@heroicons/react/outline';

const About = ({ data }) => {
  return (
    <section id='about' className='relative pb-16 overflow-hidden pt-28'>
      <header className='mb-16 lg:text-center my-container'>
        <h2 className='text-base font-semibold tracking-wide uppercase text-primary dark:text-primary-light'>
          About
        </h2>
        <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl'>
          Our community is centered around Discord
        </p>
        <p className='max-w-4xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-gray-300'>
          General meetings every other Friday at 6:00pm in our voice chat. Have
          discussions with your peers and learn about all thing computer
          science. No requirements to join. No payments or dues.
        </p>
      </header>
      <section className=''>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div>
                <span className='flex items-center justify-center w-12 h-12 rounded-md bg-primary dark:shadow-2xl'>
                  <ChatAlt2Icon
                    className='w-6 h-6 text-white'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50'>
                  Discussions with your peers
                </h3>
                <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
                  Meet other students at UNT who are interested in computer
                  science. Everyone is encouraged to talk and contribute in our
                  meetings, and we have several other channels to keep the
                  conversation going outside of meetings.
                </p>
                <div className='mt-6'>
                  <a
                    href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL}
                    className='inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light dark:shadow-2xl'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <a href='/images/discord-chat-light.png'>
                <img
                  className='w-full shadow-xl rounded-xl cursor-zoom-in ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='/images/discord-chat-light.png'
                  alt='Discord chat screenshot'
                  title='Discord chat screenshot'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='relative mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div>
                <span className='flex items-center justify-center w-12 h-12 rounded-md bg-primary dark:shadow-2xl'>
                  <UserGroupIcon
                    className='w-6 h-6 text-white'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50'>
                  Talks from members and guests
                </h3>
                <p className='mt-4 text-lg text-gray-500 dark:text-gray-300'>
                  In most of our meetings, we have presentations from group
                  members or guests from the computer science community, like
                  professors at UNT. These talks are a great way to learn and
                  ask questions about specific areas of computer science.
                </p>
                <div className='mt-6'>
                  <a
                    href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL}
                    className='inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light dark:shadow-2xl'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <a href='/images/discord-voicechat-light.png'>
                <img
                  className='w-full shadow-xl cursor-zoom-in rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                  src='/images/discord-voicechat-light.png'
                  alt='Discord voicechat screenshot'
                  title='Discord voicechat screenshot'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
