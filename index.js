const quote = document.getElementById("quote");
const btn = document.getElementById("btn");
const getRandomQuote = async () => {
  const url = `https://api.api-ninjas.com/v1/quotes?`;
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "238YFDFM830qHpo7wMJT9Q==5P90c45LkLGt2m4U",
    },
  };
  try {
    btn.disabled = true;
    quote.innerText = "Soon a quote will appear here🫷🏻...";
    author.innerText = "~ fetching";
    category.innerText = "{ 😅 }";
    const data = await fetch(url, options).then((res) => res.json());

    quote.innerText = data[0].quote;
    author.innerText = "~ " + data[0].author;
    category.innerText = "{" + data[0].category + "}";
    // console.log(data[0].category);
    btn.disabled = false;
  } catch (error) {
    btn.disabled = false;
    quote.innerText = "Something went wrong...";
    author.innerText = "~ ";
    category.innerText = "not Ray's fault 😅";
  }
};
getRandomQuote();
btn.addEventListener("click", getRandomQuote);
