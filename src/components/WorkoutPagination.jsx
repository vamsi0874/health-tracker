
import React from 'react';

export const WorkoutPagination = ({ totalWorkouts, workoutsPerPage, currentPage, setCurrentPage, setWorkoutsPerPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalWorkouts / workoutsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const maxButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);

  if (endPage - startPage < maxButtons - 1) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (e) => {
    setWorkoutsPerPage(parseInt(e.target.value));
    setCurrentPage(1); 
  };

  return (
    <div>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {pageNumbers.slice(startPage - 1, endPage).map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          disabled={number === currentPage}
        >
          {number}
        </button>
      ))}
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
      <select className='select' value={workoutsPerPage} onChange={handlePerPageChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

export default WorkoutPagination;
