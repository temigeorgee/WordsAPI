const OptionFetcher = (url) => {
  var options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${url}`,
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "c012d2aca6msh34b522b59ac446ap10f9cfjsnf1adf9678b2e",
    },
  };
  return options;
};
export default OptionFetcher;
