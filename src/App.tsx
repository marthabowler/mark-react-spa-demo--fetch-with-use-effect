import { useEffect, useState } from "react";

interface Quote {
  quote: string;
}

function App() {
  const [myquote, setMyQuote] = useState<Quote>();

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("https://api.kanye.rest/");
      const jsonBody: Quote = await response.json();
      setMyQuote(jsonBody);
    };

    fetchJoke();
  }, []);

  // useEffect(() => {
  //   fetch("https://api.kanye.rest/")
  //     .then((response) => response.json())
  //     .then((jsonBody: Quote) => setMyQuote(jsonBody));
  // }, []);

  return (
    <>
      <h1>Quote app</h1>
      {myquote && (
        // This is a conditional rendering strategy
        //  using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript
        //  doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false
        //  regardless)
        //
        // Exploiting that feature to conditional render JSX!
        <>
          <p>{myquote.quote}</p>
        </>
      )}
    </>
  );
}

export default App;
