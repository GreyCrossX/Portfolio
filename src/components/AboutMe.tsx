import React from 'react';
import { useNavigation } from './NavigationContext';
import { Button } from './ui/button';

const AboutMe: React.FC = () => {
  const { setActivePage } = useNavigation();

  const handleGetInTouch = () => {
    setActivePage('contact');
  };

  return (
    <div className='flex flex-col items-center justify-center p-6 md:p-12 text-text dark:text-text z-40'>
      <div className='max-w-3xl text-center space-y-6'>
        <p className='text-2xl md:text-4xl font-bold'>
          Have you ever <span className='text-primary-700 dark:text-primary-300'>struggled</span> finding the <span className='text-primary-700 dark:text-primary-300'>right solutions</span> for your projects?
        </p>
        <p className='text-md md:text-lg'>
          Hi, I'm Miguel A. Athie, and this is my project:GreyX. I specialize in Web development, SEO, and copywriting. If you're here, you've likely felt the frustration of building something amazing yet not seeing the results you hoped for.
        </p>
        <p className='text-md md:text-lg'>
          As a certified <a href="https://coursera.org/share/36ead4b3389f51eba8de2d3d24d64e40" className='font-bold text-primary-700 dark:text-primary-300 underline'>React Specialist</a>, I bring cutting-edge front-end skills to the table. Since software development is more than just code, I can help you with <span className='font-bold'>SEO</span> and <span className='font-bold'>copywriting</span>.
        </p>
        <p className='text-md md:text-lg'>
          I honed my skills in meticulous writing and attention to detail, which now enhance my ability to deliver top-notch copywriting services alongside web development.
        </p>
        <p className='text-xl md:text-2xl font-bold'>
          Why Work With Me?
        </p>
        <p className='text-md md:text-lg'>
          I understand the unique challenges developers face because I've been in your shoes. My goal is to provide you with <span className='font-bold'>quick and affordable solutions</span> that elevate your projects and help you achieve your business goals.
        </p>
        <p className='text-md md:text-lg'>
          <span className='font-bold text-primary'>React Development</span>: Building responsive, high-performance web applications tailored to your needs.
        </p>
        <p className='text-md md:text-lg'>
          <span className='font-bold text-primary'>SEO</span>: Optimizing your content to improve visibility and drive organic traffic.
        </p>
        <p className='text-md md:text-lg'>
          <span className='font-bold text-primary'>Copywriting</span>: Crafting compelling copy that resonates with your audience and drives conversions.
        </p>
        <p className='text-md md:text-lg'>
          Here’s what some of my clients have said:
        </p>
        <div className='bg-black/15 dark:bg-white/15 p-4 rounded-md shadow-lg'>
          <p className='italic text-primary-800 dark:text-primary-300'>"As a developer, I can confidently say that GreyX has become my go-to resource for both front-end components and copywriting services. The quality provided is unmatched."</p>
          <p className='text-right font-bold text-primary-700 dark:text-primary-400'>- Manuel B. Fernández, VAPA Inc</p>
        </div>
        <p className='text-md md:text-lg'>
          I'm excited to help you achieve your goals. Let's create something amazing together.
        </p>
        <Button
          className='mt-6 px-6 py-2 bg-primary-500 dark:bg-primary-300 text-white font-bold rounded-md dark:hover:bg-primary-200 hover:bg-primary-800 z-40'
          onClick={handleGetInTouch}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;
