import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "Mobile Developer",
  "DevOps Engineer",
  "Product Manager"
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-full max-w-7xl mx-auto my-20 px-4 sm:px-8 md:px-12 "> {/* Padding horizontal responsif */}
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 px-2 "  /* Responsive basis + padding horizontal kecil */
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className={`
                  rounded-full w-full
                  border-gray-400 text-gray-700
                  transition-all duration-500 ease-in-out
                  hover:bg-[#6300B3] hover:text-white hover:border-[#6300B3]
                  text-sm sm:text-base  /* Ukuran font responsif */
                  py-2 sm:py-3         /* Padding vertikal responsif */
                 cursor-pointer`}
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
