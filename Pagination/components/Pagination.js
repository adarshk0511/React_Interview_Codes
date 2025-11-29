const Pagination = ({
  currentPage,
  noOfPages,
  goToNextPage,
  goToPrevPage,
  handlePageChange,
}) => {
  return (
    <div className="pagination-conatiner">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={goToPrevPage}
      >
        ◀️
      </button>
      {[...Array(noOfPages).keys()].map((n) => {
        return (
          <span
            className={`page-number ${currentPage === n ? "active" : ""}`}
            onClick={() => handlePageChange(n)}
          >
            {n + 1}
          </span>
        );
      })}
      <button
        disabled={currentPage === noOfPages - 1}
        className="page-number "
        onClick={goToNextPage}
      >
        ▶️
      </button>
    </div>
  );
};

export default Pagination;
