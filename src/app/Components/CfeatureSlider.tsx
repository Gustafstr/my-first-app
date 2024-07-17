'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    title: 'Allt du behöver för din studietid. Köp en bok, få tillgång till en hel värld.',
    image: '/assets/1.png', // Correct relative path
    description: "Search in your textbooks, find answers to complex questions.",
    bgColor: "bg-gradient-to-b from-white to-green-100",
  },
  {
    title: 'Allt du behöver för din studietid. Köp en bok, få tillgång till en hel värld.',
    image: '/assets/2.png', // Correct relative path
    description: "Search in your textbooks, find answers to complex questions.",
    bgColor: "bg-gradient-to-b from-white to-green-100",
  },
  {
    title: 'Allt du behöver för din studietid. Köp en bok, få tillgång till en hel värld.',
    image: '/assets/3.png', // Correct relative path
    description: "Search in your textbooks, find answers to complex questions.",
    bgColor: "bg-gradient-to-b from-white to-green-100",
  },
  {
    title: 'Allt du behöver för din studietid. Köp en bok, få tillgång till en hel värld.',
    image: '/assets/4.png', // Correct relative path
    description: "Search in your textbooks, find answers to complex questions.",
    bgColor: "bg-gradient-to-b from-white to-green-100",
  },
];



const FeatureSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full min-h-screen py-12 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-4">
          {slides[currentSlide].title}
        </h2>
        <div className="relative bg-gradient-to-r from-white to-green-100 p-8 rounded-lg shadow-lg w-full lg:w-3/4 h-auto lg:h-auto mx-auto">
          <Image 
            src={slides[currentSlide].image} 
            alt="Feature" 
            width={1000} 
            height={600} 
            className="rounded-lg"
          />
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            &lt;
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            &gt;
          </button>
        </div>
        <p className="text-center mt-4">{slides[currentSlide].description}</p>
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`w-3 h-3 mx-1 rounded-full ${index === currentSlide ? 'bg-green-800' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;