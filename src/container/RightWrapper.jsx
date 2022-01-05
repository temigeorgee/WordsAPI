import { useState } from "react";
import Button from "../component/Button";
import SearchBar from "../component/SearchBar";
import WordInfo from "../component/WordInfo";
import axios from "axios";
import OptionFetcher from "../utils/ApiRequest";
import Loader from "../component/Loader";

const RightWrapper = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedWord, setSearchedWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const clearSearchInputToggle = () => {
    setSearchInput("");
  };
  const handleSearchInput = (event) => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const searchWord = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.request(OptionFetcher(searchInput));
      setSearchedWord(data);
      setLoading(false);
    } catch (error) {
      // console.log(error.response);
      setLoading(true);
      setErrorMessage(error.response.status);
      setLoading(false);
    }
  };
  console.log("rightwrapper", errorMessage);
  const handleRandom = () => {
    setIsLoading(true);
    window.location.reload("/");
    setIsLoading(false);
  };
  return (
    <div className="flex items-center justify-center mb-12  flex-col lg:mt-52 space-y-5 container lg:pt-16">
      <SearchBar
        clearSearchInputToggle={clearSearchInputToggle}
        handleSearchInput={handleSearchInput}
        searchInput={searchInput}
        searchWord={searchWord}
        loading={loading}
      />
      <hr className="divider" />

      <Button
        buttonStyle="btn--primary--solid"
        buttonSize="btn--large
      "
        onClick={handleRandom}
      >
        {isLoading ? <Loader /> : "Surprise me"}
      </Button>

      <WordInfo
        searchedWord={searchedWord}
        loading={loading}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default RightWrapper;
