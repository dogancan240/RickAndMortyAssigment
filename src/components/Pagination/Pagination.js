import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPagenumber }) => {
  //copmpnent direkt olarak bootstrap kütüphanesinden alınmıştır, sadece gerekli olna sayfa sayısı verilmeiştir
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-3 my-4"
      //forcePage Pagination ksımında diğer sayfaların numaralarını görmek isterkne sayfanın değişmesini engeller
      //forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      onPageChange={(number) => {
        setPagenumber(number.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
