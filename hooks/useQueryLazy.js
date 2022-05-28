import { useCallback, useState } from "react";
import { client } from "~/sanity/config";

const useQueryLazy = (query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const fetch = useCallback(async (params = {}) => {
    try {
      setLoading(true);
      const res = await client.fetch(query, params);
      setData(res);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return [fetch, { data, loading, error }];
};

export default useQueryLazy;
