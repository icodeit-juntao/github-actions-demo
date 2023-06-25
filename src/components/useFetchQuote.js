import {useEffect, useState} from "react";

const useFetchQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      fetch('https://api.quotable.io/quotes/random?limit=1').then(r => r.json()).then(data => {
        setLoading(false);
        setQuotes(data);
      }).catch(e => {
        setLoading(false);
      })
    }

    fetchQuotes();
  }, [])

  return { quote: quotes[0], loading };
}

export { useFetchQuote };