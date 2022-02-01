import React from 'react';

const Pagination = ({postperPage, totalPosts, paginate}) => {
  const pageNumbers = [];
  for(let i=1; i<=Math.ceil(totalPosts/postperPage);i++){
      pageNumbers.push(i);
  }
    
  return <div>
      <ul className='pagination'> 
      {pageNumbers.map(number =>(
          <li key={number} className='page-item'>
              <a onClick={()=>paginate(number)} href='!#' className='page-link'>
                  {number}
              </a>
          </li>
      ))}
      </ul>
  </div>;
};

export default Pagination;
