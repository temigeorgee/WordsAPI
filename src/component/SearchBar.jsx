import { FiSearch } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import Button from "./Button";
import Loader from "./Loader";

const SearchBar = (props) => {
  return (
    <div className="wrapper">
      <form onSubmit={props.searchWord}>
        <div className="search">
          <input
            type="text"
            placeholder="Search a word"
            required
            spellCheck="false"
            value={props.searchInput}
            onChange={props.handleSearchInput}
            className="md:h-12 w-full outline-none lg:text-lg  lg:px-10  bg-transparent md:px-10 px-9 text-sm h-8"
          />
          <FiSearch className="search-icon" />
          <span
            className="material-icons"
            onClick={props.clearSearchInputToggle}
          >
            <RiCloseFill />
          </span>
        </div>
        <Button
          buttonStyle="btn--primary--outline"
          buttonSize="btn--large"
          type="submit"
        >
          {props.loading ? <Loader /> : "Search"}
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
