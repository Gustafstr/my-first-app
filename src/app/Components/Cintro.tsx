import React from 'react';
import library from '/Users/gustafstrauss/Development/nextjsapp/my-first-app/public/assets/library.png';
import Image from 'next/image';

const Intro: React.FC = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between bg-white px-4 lg:px-8 py-8 lg:py-16'>
      <div className='lg:w-1/2 flex-grow pr-4 lg:pr-8 flex flex-col justify-center lg:h-full'>
        <h1 className='text-4xl font-bold'>
          <span className='text-green-800'>Kurslitteratur.</span><br />
          <span className='text-black'>Extentor.</span>
        </h1>
        <p className='mt-4 text-lg text-gray-700'>
          Här hittar du alla dina kursböcker, ex-tentor och smarta studieverktyg. Köp e-böcker billigt och ha pengar över till annat. Använd av studenter från hela världen.
        </p>
      </div>
      <div className='lg:w-1/2 mt-8 lg:mt-0 flex justify-end'>
        <Image
          src={library}
          alt="Library"
          width={500}
          height={500}
          className='rounded-lg shadow-lg'
        />
      </div>
    </div>
  );
};

export default Intro;