import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    // How To:
    //  const { data, error, inProgress } = useFetch(URL);
    (async () => {
      try {
        setInProgress(true);
        const res = await fetch(url);
        const result = await res.json();

        if (res.ok) {
          setData(result);
          setError(null);
        } else {
          throw result;
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setInProgress(false);
      }

      return { data, error, inProgress };
    })();
  }, []);
};
