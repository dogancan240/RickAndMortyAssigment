import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setPagenumber, setSearch }) => {
  //Search barındaki herhangi bir değişimden yeniden veriler çekilecek çünkü App.js doysadına useEffect çalışacak
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPagenumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        className={`${styles.input}`}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`btn btn-primary fs-5 ${styles.btn}`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
