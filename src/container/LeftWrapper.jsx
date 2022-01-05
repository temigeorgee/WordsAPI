import { useEffect, useState } from "react";
import OptionFetcher from "../utils/ApiRequest";
import axios from "axios";
import { truncate } from "../utils/constant";

const LeftWrapper = ({ setSwitcher, switcher }) => {
  const [randomData, setRandomData] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    axios
      .request(OptionFetcher("?random=true"))
      .then(function (response) {
        setLoading(false);
        setRandomData(response.data);
        setSwitcher(true);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, [setSwitcher]);

  if (loading) {
    return <h1>...</h1>;
  }

  return (
    <div className="left-container flex justify-center items-start flex-col space-y-2 lg:space-y-8  px-6 lg:px-10 lg:mt-96 container ">
      <div className="py-1 w-4/6 bg-white md:mt-28 xl:mt-32" />
      <p className="text-base font-light text-white"> New word:</p>
      <h2 className="text-white text-3xl lg:text-8xl font-thin lg:max-w-sm truncate capitalize max-w-xl opacity-95 outline-2">
        {!loading && randomData.word}
      </h2>
      {randomData?.results &&
        randomData?.results.slice(0, 1).map((el) => (
          <>
            <p className="text-gray-400 lg:text-base uppercase text-xs">
              / {el.partOfSpeech} /
            </p>
            <p className="text-white text-sm lg:text-xl lg:leading-9">
              {truncate(el.definition, 85)}
            </p>

            {el.synonyms && (
              <div>
                <span className="text-gray-400 text-xs lg:text-base">
                  Synonyms :
                </span>
                <p className="text-gray-400 text-xs lg:text-base mx-2">
                  {truncate(el.synonyms, 10)}
                </p>
              </div>
            )}
          </>
        ))}
      {/* {randomData?.pronunciation && (
        <p className="text-gray-400 text-base">
          Pronunication:{" "}
          {randomData?.pronunciation || randomData?.pronunciation.all}
        </p>
      )} */}
      {randomData?.syllables && (
        <ul className="flex justify-between items-center text-gray-400 text-xs lg:text-base max-w-sm">
          Syllables:
          {randomData?.syllables?.list.map((el) => (
            <li className="text-gray-400 text-xs lg:text-base mx-4">
              {truncate(el, 5)}
            </li>
          ))}
        </ul>
      )}
      <div className="py-1 w-4/6 bg-white" />
    </div>
    // }
  );
};

export default LeftWrapper;
