import React, { useState } from 'react';

const Pagination = ({ active_page, num_of_pages }) => {
  const [page, setPage] = useState(active_page);

  const handlePrev = () => {
    setPage((prevPage) => (prevPage === 1 ? num_of_pages : prevPage - 1));
  };

  const handleNext = () => {
    setPage((prevPage) => (prevPage === num_of_pages ? 1 : prevPage + 1));
  };

  return (
    <>
      <div className='flex justify-center items-center gap-10 mt-[70px]'>
        <button
          onClick={handlePrev}
          className={`pr-4 pt-3 pb-3 rounded-full border-none pl-3 bg-slate-700 text-white text-center ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={page === 1}
        >
          {"<"}
        </button>
        <div className='flex justify-center items-center gap-10'>
          {
            Array(num_of_pages).fill(0).map((_, index) => (
              <p
                key={index}
                className={`bg-stone-500 pt-2 pb-2 pr-2 pl-2 rounded-lg ${page === index + 1 ? 'bg-blue-900 text-white' : ''}`}
              >
                {index + 1}
              </p>
            ))
          }
        </div>
        <button
          onClick={handleNext}
          disabled={page==num_of_pages}
          className={`pr-4 pt-3 pb-3 rounded-full border-none pl-3 bg-slate-700 text-white text-center ${page === num_of_pages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default Pagination;
