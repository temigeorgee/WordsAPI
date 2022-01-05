import React from "react";

const WordInfo = ({ searchedWord, errorMessage }) => {
  return (
    <div className="word container  max-h-80 overflow-scroll pb-10 z-10 ">
      {errorMessage && <p> Word not found</p>}

      <div className="word-text">
        <p className="font-bold text-2xl leading-5  my-3 primary uppercase">
          {!errorMessage && searchedWord && searchedWord?.word}
        </p>
        {/* <p className="text-gray-400 text-xs uppercase my-2">/ {el.partOfSpeech} /</p> */}
      </div>

      <ul className="word-meaning flex flex-col justify-between items-start gap-1 space-y-3  mt-3">
        {searchedWord && searchedWord.length > 0 && "Definition"}
        {!errorMessage &&
          searchedWord &&
          searchedWord?.results?.map((el) => (
            <li className="border-l-4 border-primary px-3 text-base primary sm:text-sm">
              {el?.definition}
              <span>
                <p className="text-gray-400 text-xs uppercase my-2">
                  {el?.partOfSpeech}
                </p>
              </span>
            </li>
          ))}
      </ul>
      {!errorMessage && searchedWord === "" && (
        <p className="word_info-text text-xs lg:text-lg">
          Type any existing word and press enter to get meanings.
        </p>
      )}
    </div>
  );
};

export default WordInfo;
