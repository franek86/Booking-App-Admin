type PaginationProps = {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPage, onPageChange }: PaginationProps) {
  const maxVisiblePages = 4;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(currentPage - halfVisible, 1);
    let endPage = Math.min(currentPage + halfVisible, totalPage);

    if (currentPage <= halfVisible) {
      startPage = 1;
      endPage = Math.min(maxVisiblePages, totalPage);
    } else if (currentPage > totalPage - halfVisible) {
      startPage = Math.max(totalPage - maxVisiblePages + 1, 1);
      endPage = totalPage;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 mx-1 rounded-full ${currentPage === i ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPage) {
      pageNumbers.push(
        <span key='end-ellipsis' className='px-2'>
          ...
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className='flex items-center justify-start my-10 w-full'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='px-3 py-1 mx-1 bg-green-500 text-white rounded-md disabled:opacity-50'
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
        className='px-3 py-1 mx-1 bg-green-500 text-white rounded-md disabled:opacity-50'
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
