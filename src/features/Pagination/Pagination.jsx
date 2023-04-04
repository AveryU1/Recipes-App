import React from "react";
import { useStateDataContext } from "../../context/StateContext";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

const Pagination = () => {
  const { resultsPerpage, totalResults, handlePageClick } =
    useStateDataContext();

  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(totalResults / resultsPerpage)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        containerClassName={"pagination-container"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-link"}
        nextClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
      />
    </div>
  );
};

export default Pagination;
