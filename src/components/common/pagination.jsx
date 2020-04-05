import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
    const {itemCount, pageSize ,currentPage , onPageChange} = props;
    const pageCount =Math.ceil( itemCount / pageSize );
    if(pageCount === 1 ) return null;     //pageSize is one page 
    const pagesCount = _.range(1, pageCount+1); // [1, ...pageCount].map()  => pageCount + 1 becuase end number not calculate



    return (
      <nav>
        <ul className="pagination">
          {pagesCount.map(page => (
            <li key ={page} className ={currentPage === page ? "page-item active" : "page-item"} style={{ cursor: "pointer" }}>
              <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
}
Pagination.propTypes = {
  itemCount : PropTypes.number.isRequired,
  pageSize : PropTypes.number.isRequired,
  currentPage : PropTypes.number.isRequired,
  onPageChange : PropTypes.func.isRequired

};


 
export default Pagination;